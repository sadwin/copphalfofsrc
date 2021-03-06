import React from 'react'
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
} from 'devextreme-react/data-grid';
import Button from "devextreme-react/button";
import DataSource from "devextreme/data/data_source";
import CustomStore from 'devextreme/data/custom_store';
import {Template} from 'devextreme-react/core/template';
import notify from 'devextreme/ui/notify';
import axios from "axios";

class DictLegalFormTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalCount: 0
        };
        this.filterBuilderPopupPosition = {of: window};
        this.dataSource = new DataSource({
            store: new CustomStore({
                key: "id",
                load: function (loadOptions) {
                    return axios.get("/work/api/dict/legal-form", {
                        headers: {
                            'Accept': 'application/json'
                        },
                    }).then(response => {
                        return {
                            data: response.data
                        }
                    }).catch(() => notify({
                        closeOnClick: true,
                        closeOnOutsideClick: true,
                        message: 'Не удалось загрузить справочник'
                    }, 'error'))
                }
            })
        });
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

    render() {
        return (
            <DataGrid
                dataSource={this.dataSource}
                showBorders={true}
                wordWrapEnabled={true}
                height={'100%'}
                focusedRowEnabled={true}
                allowColumnReordering={true}
                allowColumnResizing={true}
                columnAutoWidth={true}
                onContentReady={this.updateTotalCount}
                onToolbarPreparing={this.handleToolbarPreparing}
                onRowDblClick={this.handleRowDblClick}>
                <Export enabled={true} fileName={'ОПФ'} allowExportSelectedData={true}/>
                <SearchPanel visible={true}
                             width={300}
                             placeholder={'Поиск...'}/>
                <ColumnChooser allowSearch={true} mode={'select'} enabled={true}/>
                <FilterRow visible={true} applyFilter="auto"/>
                <FilterPanel visible={true}/>
                <FilterBuilderPopup position={this.filterBuilderPopupPosition}/>
                <HeaderFilter visible={true}/>
                <Sorting mode={'multiple'}/>
                <Scrolling mode={'virtual'}/>
                <StateStoring
                    enabled={true}
                    type={'localStorage'}
                    savingTimeout={0}
                    storageKey={'DictLegalFormTable'}/>
                <Column dataField={'id'} dataType={'string'} caption={'Код записи'} visible={false}/>
                <Column dataField={'abbr'} dataType={'string'} caption={'Сокращение'}/>
                <Column dataField={'name'} dataType={'string'} caption={'Наименование'}/>
                <Template name={'backButton'} render={this.renderBackButton}/>
                <Template name={'refreshButton'} render={this.renderRefreshButton}/>
                <Template name={'totalCount'} render={this.renderTotalCount}/>
                <Template name={'addButton'} render={this.renderAddButton}/>
            </DataGrid>
        )
    }

    handleToolbarPreparing(e) {
        let toolbarItems = e.toolbarOptions.items;
        toolbarItems.unshift({
                location: 'before',
                template: 'backButton'
            },
            {
                location: 'before',
                template: 'refreshButton'
            });
        for (let toolbarItem of toolbarItems) {
            if (toolbarItem.name === 'searchPanel') {
                toolbarItem.location = 'before';
            }
        }
        toolbarItems.push({
            location: 'before',
            template: 'totalCount'
        });
        toolbarItems.push({
            location: 'after',
            template: 'addButton'
        });
    }

    renderTotalCount() {
        return (<span>Найдено записей: <b>{this.state.totalCount}</b></span>)
    }

    updateTotalCount(e) {
        this.setState({
            totalCount: e.component.totalCount()
        })
    }

    handleRowDblClick(e) {
        this.props.history.push('/work/app/dict/legal-form/' + e.data.id);
    }

    handleAddButton() {
        axios.post("/work/api/dict/legal-form",
            {},
            {
                headers: {
                    'Accept': 'application/json'
                },
            }).then(response => {
            this.props.history.push("/work/app/dict/legal-form/" + response.data.id);
        }).catch(() => {
            notify({
                closeOnClick: true,
                closeOnOutsideClick: true,
                message: 'Не удалось создать новую запись'
            }, 'error');
        })
    }

    renderAddButton() {
        return (<Button icon={'fas fa-plus'} onClick={this.handleAddButton}/>);
    }

    handleRefreshButton() {
        this.dataSource.reload();
    }

    renderRefreshButton() {
        return (<Button icon={'fas fa-sync-alt'} onClick={this.handleRefreshButton}/>);
    }

    handleBackButton() {
        this.props.history.push("/work/app/dict");
    }

    renderBackButton() {
        return (<Button icon={'fas fa-chevron-left'} onClick={this.handleBackButton}/>);
    }
}

export default DictLegalFormTable;