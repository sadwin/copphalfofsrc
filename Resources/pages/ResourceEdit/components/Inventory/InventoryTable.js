import React from "react";

import DataGrid, {
  Column,
  LoadPanel,
  Scrolling,
  FilterRow,
  Selection
} from "devextreme-react/data-grid";
import CachedIcon from "@material-ui/icons/Cached";
import { withStyles } from "@material-ui/core/styles";

import { columns } from "./utils";
import SquareButton from "../../../../../ui/SquareButton";
import SearchField from "../../../../../ui/SearchField";
import AddFacilityButton from "./components/AddRoomButton";
import AddRoomModal from "./components/AddRoomModal";
import Box from "../../../../../ui/Box";
import FacilityActions from "../../../../components/FacilityActions";
import DeleteConfirmationModal from "../../../../components/DeleteConfirmationModal";
import ViewRoomModal from "./components/ViewRoomModal";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    "& #gridContainer": {
      height: "calc(100vh - 200px)"
    }
  },
  controls: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px",
    "& > div": {
      display: "flex",
      alignItems: "flex-end",
      "& > *:not(:nth-last-child(1))": {
        marginRight: "14px"
      }
    }
  }
};

class InventoryTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      selectedRooms: [],
      deleteConfimationOpen: false,
      addRoomOpen: false,
      viewResourceOpen: false,
      resourceId: null,
      focusedRoom: -1,
      focusedRowIndex: -1
    };

    this.selectRooms = this.selectRooms.bind(this);
    this.deleteRooms = this.deleteRooms.bind(this);
    this.exportSelectedRooms = this.exportSelectedRooms.bind(this);
    this.searchByText = this.searchByText.bind(this);
    this.triggerColumnChooser = this.triggerColumnChooser.bind(this);
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.showAddModal = this.showAddModal.bind(this);
    this.onRowClick = this.onRowClick.bind(this);
    this.onRowDblClick = this.onRowDblClick.bind(this);

    this.dataGridRef = React.createRef();
  }

  selectRooms({ selectedRowsData }) {
    this.setState({ selectedRooms: selectedRowsData });
  }

  deleteRooms() {
    const { deleteInventoryItems, roomId } = this.props;
    const roomsIdList = this.state.selectedRooms.map(({ id }) => id);

    deleteInventoryItems(roomsIdList, roomId);
  }

  exportSelectedRooms(selectionOnly) {
    this.dataGridRef.current.instance.exportToExcel(selectionOnly);
  }

  searchByText(e) {
    const text = e.target.value;
    this.dataGridRef.current.instance.searchByText(text);
  }

  triggerColumnChooser() {
    this.dataGridRef.current.instance.showColumnChooser();
  }

  showDeleteModal() {
    this.setState({
      deleteConfimationOpen: !this.state.deleteConfimationOpen
    });
  }

  showAddModal() {
    this.setState({ addFacilityOpen: !this.state.addFacilityOpen });
  }

  onRowClick(e) {
    const focusedRoom = e !== -1 ? e.data.id : e;
    const focusedRowIndex = e !== -1 ? e.rowIndex : e;
    this.setState({ focusedRoom, focusedRowIndex });
  }

  onRowDblClick(e) {
    this.setState({ viewResourceOpen: true, resourceId: e.data.id })
  }

  render() {
    const {
      selectedRooms,
      deleteConfimationOpen,
      addFacilityOpen,
      focusedRowIndex,
      viewResourceOpen,
      resourceId
    } = this.state;
    const {
      inventoryData,
      classes,
      isDeletingRooms,
      getRooms,
      roomInfo,
      createInventoryItem,
      createdInventoryItem,
      editMode
    } = this.props;
    const { root, controls } = classes;

    const roomsActions = [
      {
        label: "Удалить выбранные",
        onClick: this.showDeleteModal,
        disabled: isDeletingRooms || selectedRooms.length === 0
      },
      {
        label: "Экспортировать выбранные",
        onClick: () => this.exportSelectedRooms(true)
      },
      {
        label: "Экспортировать все",
        onClick: () => this.exportSelectedRooms(false)
      },
      {
        label: "Выбор видимых столбцов",
        onClick: this.triggerColumnChooser
      }
    ];

    return (
      <div className={root}>
        <Box>
          <DeleteConfirmationModal
            modalText="Удалить выбранные помещения?"
            open={deleteConfimationOpen}
            onConfirm={this.deleteRooms}
            handleClose={this.showDeleteModal}
          />
          <ViewRoomModal
            open={viewResourceOpen}
            handleClose={() => this.setState({ viewResourceOpen: false })}
            resourceId={resourceId}
            roomInfo={roomInfo}
           />
          <AddRoomModal
            open={addFacilityOpen}
            roomInfo={roomInfo}
            handleClose={this.showAddModal}
            createInventoryItem={createInventoryItem}
            createdInventoryItem={createdInventoryItem}
            isCreatingRoom={false}
            createdRoom={null}
          />
          <div className={controls}>
            <div>
              <SquareButton>
                <CachedIcon fontSize="small" onClick={getRooms} />
              </SquareButton>
              <SearchField width={400} onChange={this.searchByText} />
            </div>
            <div>
              {editMode && <AddFacilityButton onClick={this.showAddModal} />}
              <FacilityActions actions={roomsActions} />
            </div>
          </div>
          <div>
            <DataGrid
              elementAttr={{
                id: "gridContainer"
              }}
              ref={this.dataGridRef}
              wordWrapEnabled={true}
              dataSource={inventoryData}
              onSelectionChanged={this.selectRooms}
              focusedRowEnabled
              errorRowEnabled={false}
              onRowClick={this.onRowClick}
              onRowDblClick={this.onRowDblClick}
              focusedRowIndex={focusedRowIndex}
              showBorders
            >
              <Selection
                mode="multiple"
                showCheckBoxesMode="onClick"
                showBorders={true}
                width={120}
              />
              {columns.map(column => (
                <Column key={column.dataField} {...column} />
              ))}
              <FilterRow visible={true} />
              <Scrolling mode="virtual" />
              <LoadPanel enabled />
            </DataGrid>
          </div>
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(InventoryTable);
