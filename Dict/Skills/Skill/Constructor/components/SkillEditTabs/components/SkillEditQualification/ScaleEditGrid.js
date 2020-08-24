import React from 'react';
import Button from 'devextreme-react/button';
import DataGrid, { Column, Editing, Paging, Lookup } from 'devextreme-react/data-grid';
import Toolbar, { Item } from 'devextreme-react/toolbar';

import SquareButton from '../../../../../../../../ui/SquareButton';
import AddIcon from '@material-ui/icons/Add';
import ComboBox from '../../../../../../../../ui/ComboBox';

const fakeData = [1,2,3,4,5,6,7,8,9,10]

class ScaleEditGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.logEvent = this.logEvent.bind(this);

    this.onRowInserted = this.logEvent.bind(this, 'RowInserted');
    this.onRowUpdated = this.logEvent.bind(this, 'RowUpdated');
    this.onRowRemoved = this.logEvent.bind(this, 'RowRemoved');

    // this.clearEvents = this.clearEvents.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.createdScaleId !== this.props.createdScaleId) {
      this.forceUpdate();
    }
  }

  logEvent(eventName) {
    this.setState((state) => {
      return { events: [eventName].concat(state.events) };
    });
  }

  onInitNewRow = (e) => {
      this.props.addScale(this.props.moduleId)
  }

  onRowInserting = (e) => {
   let data = {
      "main" : {
        "name" : e.data.data.name || '',
        "junior" : e.data.data.junior || 1,
        "master" : e.data.data.master || 1,
      }
    }
    this.props.saveScale(this.props.moduleId, this.props.createdScaleId, data)
    console.log('onRowInserting')
  }

  onEditingStart = () => {
    console.log('onEditingStart')
  }

  onRowUpdating = (e) => {
    let data = {
      "main" : {
        "name" : e.newData.data.name || '',
        "junior" : e.newData.data.junior || 1,
        "master" : e.newData.data.master || 2,
      }
    }
    this.props.saveScale(this.props.moduleId, e.key, data)
  }

  onRowRemoving = (e) => {
    this.props.removeScale(this.props.moduleId, e.key)
    console.log('onRowRemoving')
  }
  
 

//   clearEvents() {
//     this.setState({ events: [] });
//   }

  render() {
    return (
      <React.Fragment>
        {/* <Toolbar>
        <Item location="center"
            locateInMenu="never"
            render={<h5>Навыки</h5>} />
        </Toolbar> */}
        <DataGrid
          id="gridContainerSkill"
          dataSource={this.props.scales}
          keyExpr="info.id"
          allowColumnReordering={true}
          showBorders={true}
          showColumnHeaders={false}
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

          <Column id="info.id" key="name" dataField="data.name" />
          <Column id="info.id" key="junior" dataField="data.junior" width={100} />
          <Column id="info.id" key="master" dataField="data.master" width={100} >
              {/* <ComboBox 
                  value={3}
                  // onChange={item => change("orgId", item.id)}
                  dataSource={facilities}
              /> */}
          </Column>
          {/* <Column type="buttons">
              <SquareButton onClick={() => addScale(moduleItem.info.id)}>
                    <AddIcon fontSize="small" />
              </SquareButton>
          </Column> */}
        </DataGrid>
      </React.Fragment>
    );
  }
}

export default ScaleEditGrid;
