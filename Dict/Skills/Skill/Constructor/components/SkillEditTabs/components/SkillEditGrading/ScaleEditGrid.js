import React from 'react';
import Button from 'devextreme-react/button';
import DataGrid, { Column, Editing, Paging, Lookup } from 'devextreme-react/data-grid';
import Toolbar, { Item } from 'devextreme-react/toolbar';

import SquareButton from '../../../../../../../../ui/SquareButton';
import AddIcon from '@material-ui/icons/Add';
import ComboBox from '../../../../../../../../ui/ComboBox';
import { Template } from 'devextreme-react';


class RateEditGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.logEvent = this.logEvent.bind(this);
  }

  logEvent(eventName) {
    this.setState((state) => {
      return { events: [eventName].concat(state.events) };
    });
  }

  onInitNewRow = (e) => {
      this.props.addRate(this.props.moduleId)
  }

  onRowInserting = (e) => {
   let data = {
        "main" : {
          "section" : e.data.data.section || '',
          "name" : e.data.data.name || '',
          "rate" : e.data.data.rate || 1,
        }
    }
    this.props.saveRate(this.props.moduleId, this.props.createdRateId, data);
  }

  onRowUpdating = (e) => {
    let data = {
      "main" : {
        "section" : e.newData.data.section || e.oldData.data.section,
        "name" : e.newData.data.name || e.oldData.data.name,
        "rate" : e.newData.data.rate || e.oldData.data.rate,
      }
    }
    this.props.saveRate(this.props.moduleId, e.key, data)
  }

  onRowRemoving = (e) => {
    this.props.removeRate(this.props.moduleId, e.key)
  }
  


  render() {
    return (
      <React.Fragment>
        <DataGrid
          id="gridContainerSkill"
          dataSource={this.props.rates}
          keyExpr="info.id"
          allowColumnReordering={true}
          showBorders={true}
          onEditingStart={this.onEditingStart}
          onInitNewRow={this.onInitNewRow}
          onRowInserting={this.onRowInserting}
          onRowInserted={this.onRowInserted}
          onRowUpdating={this.onRowUpdating}
          onRowUpdated={this.onRowUpdated}
          onRowRemoving={this.onRowRemoving}
          onRowRemoved={this.onRowRemoved}>

          <Editing
            mode="row"
            allowUpdating={true}
            allowDeleting={true}
            allowAdding={true} />
          <Column caption="Раздел" alignment={'center'} key="section" dataField="data.section" width={100} />
          <Column caption="Критерий" key="name" dataField="data.name"  />
          <Column caption="Удельный вес (%)" alignment={'center'} key="rate" dataField="data.rate" width={150} />

         
        </DataGrid>
      </React.Fragment>
    );
  }
}

export default RateEditGrid;
