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

class DictRegionViewRevisionsImpl extends React.PureComponent {

    render() {
        return (
            <DataGrid dataSource={this.props.revisionsInfo} showBorders={true}
                      width={'100%'} height={'100%'}>
                <DataGridScrolling mode={'virtual'}/>
                <DataGridColumn caption={'Операция'} width={100} fixed={true}
                                alignment={'center'}
                                calculateDisplayValue={getRevisionTypeName}/>
                <DataGridColumn caption={'Дата'} dataField={'date'} dataType={'datetime'}/>
                <DataGridColumn caption={'Пользователь'} dataField={'user'}
                                dataType={'string'}/>
            </DataGrid>
        )
    }
}

export default DictRegionViewRevisionsImpl;