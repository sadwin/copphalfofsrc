import React from "react";
import Button from "devextreme-react/button";
import Popup from "devextreme-react/popup";
import {Template} from "devextreme-react";
import DataGrid, {
    Column,
    FilterRow, HeaderFilter, Scrolling,
    SearchPanel, Sorting, StateStoring
} from "devextreme-react/data-grid";
import CustomStore from "devextreme/data/custom_store";
import axios from "axios";
import notify from "devextreme/ui/notify";

class PersonViewWorldSkillAddImpl extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            selectedId: null
        };
        this.grid = null;
        this.popup = null;
        this.handlePopupInitialized = this.handlePopupInitialized.bind(this);

        this.handleGridInitialized = this.handleGridInitialized.bind(this);
        this.handleGridToolbarPreparing = this.handleGridToolbarPreparing.bind(this);
        this.handleGridFocusedRowChanged = this.handleGridFocusedRowChanged.bind(this);
        this.handleGridRowDbClick = this.handleGridRowDbClick.bind(this);

        this.renderSelectButton = this.renderSelectButton.bind(this);

        this.handleSelectButtonClick = this.handleSelectButtonClick.bind(this);
        this.handleAddStart = this.handleAddStart.bind(this);

        this.store = new CustomStore({
            key: "id",
            load: function (loadOptions) {
                return axios.get('/work/api/dict/world-skill', {
                    headers: {
                        'Accept': 'application/json'
                    },
                    params: {
                        query: {
                            filter: loadOptions.filter,
                            quick: null
                        }
                    }
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
        });
    }

    handleAddStart() {
        if (this.popup != null) {
            this.setState({
                selectedId: null
            });
            this.popup.show();
        }
    }

    handlePopupInitialized(e) {
        this.popup = e.component;
    }

    handleGridInitialized(e) {
        this.grid = e.component;
    }

    handleGridToolbarPreparing(e) {
        let toolbarItems = e.toolbarOptions.items;
        e.toolbarOptions.items.push({
            location: 'before',
            template: 'select'
        });
        for (let toolbarItem of toolbarItems) {
            if (toolbarItem.name === 'searchPanel') {
                toolbarItem.location = 'before';
            }
        }
    }

    handleGridFocusedRowChanged(e) {
        if (e.row != null && e.row.data != null) {
            this.setState({
                selectedId:  e.row.data.id
            })
        }
    }

    handleGridRowDbClick(e) {
        let {addWorldSkill} = this.props;
        let worldSkillId = e.data.id;
        if (this.popup != null) {
            this.popup.hide();
        }
        addWorldSkill(worldSkillId);
    }

    handleSelectButtonClick() {
        let {addWorldSkill} = this.props;
        let {selectedId} = this.state;
        if (this.popup != null) {
            this.popup.hide();
        }
        if (selectedId != null) {
            addWorldSkill(selectedId);
        }
    }

    renderSelectButton() {
        let {selectedId} = this.state;
        let disabled = selectedId == null;
        return (
            <Button icon={'fas fa-plus'}
                    stylingMode={'contained'}
                    type={'default'}
                    disabled={disabled}
                    onClick={this.handleSelectButtonClick}
                    text={'Выбрать'}/>
        );
    }

    render() {
        return (
            <React.Fragment>
                <Button stylingMode={'contained'} icon={'fas fa-plus'} onClick={this.handleAddStart}/>
                <Popup
                    defaultVisible={false}
                    dragEnabled={false}
                    showTitle={true}
                    title={'Выбор компетенции Ворлдскиллс'}
                    width={'60%'} height={'80%'}
                    onInitialized={this.handlePopupInitialized}>
                    <DataGrid
                        dataSource={this.store}
                        showBorders={true}
                        wordWrapEnabled={true}
                        height={'100%'}
                        focusedRowEnabled={true}
                        allowColumnReordering={true}
                        allowColumnResizing={true}
                        columnAutoWidth={true}
                        remoteOperations={{filtering: true, summary: false}}
                        onToolbarPreparing={this.handleGridToolbarPreparing}
                        onFocusedRowChanged={this.handleGridFocusedRowChanged}
                        onInitialized={this.handleGridInitialized}
                        onRowDblClick={this.handleGridRowDbClick}>
                        <SearchPanel visible={true}
                                     width={300}
                                     placeholder={'Поиск...'}/>
                        <FilterRow visible={true} applyFilter="auto"/>
                        <HeaderFilter visible={true}/>
                        <Sorting mode={'multiple'}/>
                        <Scrolling mode={'virtual'}/>
                        <StateStoring
                            enabled={true}
                            type={'localStorage'}
                            savingTimeout={0}
                            storageKey={'PersonViewWorldSkillAddTable'}/>
                        <Column dataField={'id'} dataType={'string'} caption={'Код записи'} visible={false}/>
                        <Column dataField={'cis'} dataType={'string'} caption={'№ CIS'}/>
                        <Column dataField={'typeName'} dataType={'string'} caption={'Тип'}/>
                        <Column dataField={'name'} dataType={'string'} caption={'Наименование'}/>
                        <Column dataField={'nameEng'} dataType={'string'} caption={'Name of competence'}/>
                        <Column dataField={'statusName'} dataType={'string'} caption={'Статус компетенции'}/>
                        <Column dataField={'categoryName'} dataType={'string'} caption={'Блок компетенций'}/>
                        <Template name={'select'} render={this.renderSelectButton}/>
                    </DataGrid>
                </Popup>
            </React.Fragment>
        )
    }
}

export default PersonViewWorldSkillAddImpl;