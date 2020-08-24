import React from "react";
import DataGrid, {Column as DataGridColumn, Scrolling as DataGridScrolling} from "devextreme-react/data-grid";


function getRevisionTypeName(data) {
    if (data.type === 0) {
        return 'Создание'
    } else if (data.type === 1) {
        return 'Изменение'
    } else if (data.type === 2) {
        return 'Удаление'
    }
    return 'Неизвестно';
}

class PersonViewRevisionsImpl extends React.PureComponent {

    render() {
        const {
            revisionsData
        } = this.props;
        return (
            <div className={'copp-person-view-info-revisions'}>
                <DataGrid dataSource={revisionsData} showBorders={true}
                          width={'100%'} height={'100%'}>
                    <DataGridScrolling mode={'virtual'}/>
                    <DataGridColumn caption={'Операция'} width={100} fixed={true}
                                    alignment={'center'}
                                    calculateDisplayValue={getRevisionTypeName}/>
                    <DataGridColumn caption={'Дата'} dataField={'date'} dataType={'datetime'}/>
                    <DataGridColumn caption={'Пользователь'} dataField={'user'}
                                    dataType={'string'}/>
                </DataGrid>
            </div>
        )
    }
}

export default PersonViewRevisionsImpl;