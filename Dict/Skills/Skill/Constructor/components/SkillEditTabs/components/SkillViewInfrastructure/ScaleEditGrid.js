import React from 'react';
import Button from 'devextreme-react/button';
import DataGrid, { Column, Editing, Paging, Lookup } from 'devextreme-react/data-grid';
import Toolbar, { Item } from 'devextreme-react/toolbar';

import SquareButton from '../../../../../../../../ui/SquareButton';
import AddIcon from '@material-ui/icons/Add';
import ComboBox from '../../../../../../../../ui/ComboBox';

class ScaleEditGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.logEvent = this.logEvent.bind(this);
    this.onRowInserted = this.logEvent.bind(this, 'RowInserted');
    this.onRowUpdated = this.logEvent.bind(this, 'RowUpdated');
    this.onRowRemoved = this.logEvent.bind(this, 'RowRemoved');
  }

  componentDidUpdate(prevProps) {
    if(prevProps.createdResourceId !== this.props.createdResourceId) {
      this.forceUpdate();
    }
  }
  logEvent(eventName) {
    this.setState((state) => {
      return { events: [eventName].concat(state.events) };
    });
  }


  onInitNewRow = (e) => {
      this.props.addResource(this.props.roomId)
  }

  onRowInserting = (e) => {
   let data = {
      "main" : {
        "name" : e.data.data.name || '',
        "count" : e.data.data.count || 1,
      }
    }
    this.props.saveResource(this.props.roomId, this.props.createdResourceId, data)
  }

  onRowUpdating = (e) => {
    let data = {
      "main" : {
        "name" : e.newData.data.name || e.oldData.data.name,
        "count" : e.newData.data.count || e.oldData.data.count,
      }
    }
    this.props.saveResource(this.props.roomId, e.key, data)
  }

  onRowRemoving = (e) => {
    this.props.removeResource(this.props.roomId, e.key)
  }


  render() {
    return (
      <React.Fragment>
        <DataGrid
          id="gridContainerSkillResources"
          dataSource={this.props.resources}
          keyExpr="info.id"
          allowColumnReordering={true}
          showBorders={true}
          showColumnHeaders={false}
          onRowExpanding={this.onRowExpanding}
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

          <Column  key="name" dataField="data.name" />
          <Column  key="count" dataField="data.count" width={100} />
        </DataGrid>
      </React.Fragment>
    );
  }
}

export default ScaleEditGrid;
