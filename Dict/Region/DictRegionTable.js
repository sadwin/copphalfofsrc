import React from "react";
import DataGrid, {
    Column,
    Scrolling,
    Sorting,
    FilterRow,
    HeaderFilter,
    ColumnChooser,
    StateStoring,
    SearchPanel,
    FilterPanel,
    Export,
    FilterBuilderPopup
} from "devextreme-react/data-grid";
import { Template } from "devextreme-react/core/template";
import notify from "devextreme/ui/notify";
import axios from "axios";
import Button from "devextreme-react/button";
import { connect } from "react-redux";
import { loadList } from "./View/fetch";

class DictRegionTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCount: 0
        };
        this.filterBuilderPopupPosition = { of: window };

        this.handleRowDblClick = this.handleRowDblClick.bind(this);
        this.handleToolbarPreparing = this.handleToolbarPreparing.bind(this);

        this.updateTotalCount = this.updateTotalCount.bind(this);
        this.renderTotalCount = this.renderTotalCount.bind(this);

        this.handleBackButton = this.handleBackButton.bind(this);
        this.renderBackButton = this.renderBackButton.bind(this);

        this.handleRefreshButton = this.handleRefreshButton.bind(this);
        this.renderRefreshButton = this.renderRefreshButton.bind(this);

        this.handleAddButton = this.handleAddButton.bind(this);
        this.renderAddButton = this.renderAddButton.bind(this);
    }

    componentDidMount() {
        const { loadData } = this.props;
        loadData();
    }

    render() {
        return (
            <DataGrid
                dataSource={this.props.listData}
                keyExpr="id"
                showBorders={true}
                wordWrapEnabled={true}
                height={"100%"}
                focusedRowEnabled={true}
                allowColumnReordering={true}
                allowColumnResizing={true}
                columnAutoWidth={true}
                onContentReady={this.updateTotalCount}
                onToolbarPreparing={this.handleToolbarPreparing}
                onRowDblClick={this.handleRowDblClick}
            >
                <Export
                    enabled={true}
                    fileName={"Регионы"}
                    allowExportSelectedData={true}
                />
                <SearchPanel
                    visible={true}
                    width={300}
                    placeholder={"Поиск..."}
                />
                <ColumnChooser
                    allowSearch={true}
                    mode={"select"}
                    enabled={true}
                />
                <FilterRow visible={true} applyFilter="auto" />
                <FilterPanel visible={true} />
                <FilterBuilderPopup
                    position={this.filterBuilderPopupPosition}
                />
                <HeaderFilter visible={true} />
                <Sorting mode={"multiple"} />
                <Scrolling mode={"virtual"} />
                <StateStoring
                    enabled={true}
                    type={"localStorage"}
                    savingTimeout={0}
                    storageKey={"DictRegionTable"}
                />
                <Column
                    dataField={"id"}
                    dataType={"string"}
                    caption={"Код записи"}
                    visible={false}
                />
                <Column
                    dataField={"code"}
                    dataType={"string"}
                    caption={"Код"}
                />
                <Column
                    dataField={"name"}
                    dataType={"string"}
                    caption={"Наименование"}
                />
                <Template name={"backButton"} render={this.renderBackButton} />
                <Template
                    name={"refreshButton"}
                    render={this.renderRefreshButton}
                />
                <Template name={"totalCount"} render={this.renderTotalCount} />
                <Template name={"addButton"} render={this.renderAddButton} />
            </DataGrid>
        );
    }

    handleToolbarPreparing(e) {
        let toolbarItems = e.toolbarOptions.items;
        toolbarItems.unshift(
            {
                location: "before",
                template: "backButton"
            },
            {
                location: "before",
                template: "refreshButton"
            }
        );
        for (let toolbarItem of toolbarItems) {
            if (toolbarItem.name === "searchPanel") {
                toolbarItem.location = "before";
            }
        }
        toolbarItems.push({
            location: "before",
            template: "totalCount"
        });
        toolbarItems.push({
            location: "after",
            template: "addButton"
        });
    }

    renderTotalCount() {
        return (
            <span>
                Найдено записей: <b>{this.state.totalCount}</b>
            </span>
        );
    }

    updateTotalCount(e) {
        this.setState({
            totalCount: e.component.totalCount()
        });
    }

    handleRowDblClick(e) {
        this.props.history.push("/work/app/dict/region/" + e.data.id);
    }

    handleAddButton() {
        axios
            .post(
                "/work/api/dict/region",
                {},
                {
                    headers: {
                        Accept: "application/json"
                    }
                }
            )
            .then(response => {
                this.props.history.push(
                    "/work/app/dict/region/" + response.data.id
                );
            })
            .catch(() => {
                notify(
                    {
                        closeOnClick: true,
                        closeOnOutsideClick: true,
                        message: "Не удалось создать новую запись"
                    },
                    "error"
                );
            });
    }

    renderAddButton() {
        return <Button icon={"fas fa-plus"} onClick={this.handleAddButton} />;
    }

    handleRefreshButton() {
        this.dataSource.reload();
    }

    renderRefreshButton() {
        return (
            <Button
                icon={"fas fa-sync-alt"}
                onClick={this.handleRefreshButton}
            />
        );
    }

    handleBackButton() {
        this.props.history.push("/work/app/dict");
    }

    renderBackButton() {
        return (
            <Button
                icon={"fas fa-chevron-left"}
                onClick={this.handleBackButton}
            />
        );
    }
}

const mapStateToProps = state => ({
    isError: state.dictRegionView.viewState === -1,
    isForbidden: state.dictRegionView.viewState === 403,
    isNotFound: state.dictRegionView.viewState === 404,
    listData: state.dictRegionView.list
});

const mapDispatchToProps = {
    loadData: loadList
};

export default connect(mapStateToProps, mapDispatchToProps)(DictRegionTable);
