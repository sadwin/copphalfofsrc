import React from "react";
import { connect } from "react-redux";

import DataGrid, {
  Column,
  LoadPanel,
  Scrolling,
  FilterRow,
  Selection
} from "devextreme-react/data-grid";
import OutsideClickHandler from "react-outside-click-handler";
import CachedIcon from "@material-ui/icons/Cached";
import { withStyles } from "@material-ui/core/styles";

import { columns } from "./utils";
import SquareButton from "../../../ui/SquareButton";
import SearchField from "../../../ui/SearchField";
import AddFacilityButton from "./components/AddFacilityButton";
import FacilityActions from "../FacilityActions";
import DeleteConfirmationModal from "../DeleteConfirmationModal";
import AddFacilityModal from "./components/AddFacilityModal";
import { deleteFacilities, getFacilities } from "../../store/actions";
import FacilityInfoDrawer from "../FacilityInfoDrawer";
import Box from "../../../ui/Box";

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

class FacilitiesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      selectedFacilities: [],
      deleteConfimationOpen: false,
      addFacilityOpen: false,
      focusedFacility: 122,
      focusedRowIndex: -1
    };

    this.selectFacilities = this.selectFacilities.bind(this);
    this.deleteFacilities = this.deleteFacilities.bind(this);
    this.exportSelectedFacilities = this.exportSelectedFacilities.bind(this);
    this.searchByText = this.searchByText.bind(this);
    this.triggerColumnChooser = this.triggerColumnChooser.bind(this);
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.showAddModal = this.showAddModal.bind(this);
    this.onRowClick = this.onRowClick.bind(this);

    this.dataGridRef = React.createRef();
  }

  selectFacilities({ selectedRowsData }) {
    this.setState({ selectedFacilities: selectedRowsData });
  }

  deleteFacilities() {
    const { requestFacilitiesDelete } = this.props;
    const facilitiesIdList = this.state.selectedFacilities.map(({ id }) => id);

    requestFacilitiesDelete(facilitiesIdList);
  }

  exportSelectedFacilities(selectionOnly) {
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
    const focusedFacility = e !== -1 ? e.data.id : e;
    const focusedRowIndex = e !== -1 ? e.rowIndex : e;
    this.setState({ focusedFacility, focusedRowIndex });
  }

  render() {
    const {
      selectedFacilities,
      deleteConfimationOpen,
      addFacilityOpen,
      focusedRowIndex,
      focusedFacility
    } = this.state;
    const {
      facilities,
      classes,
      isDeletingFacilities,
      getFacilities
    } = this.props;
    const { root, facilitiesContainer, controls } = classes;

    const facilitiesActions = [
      {
        label: "Удалить выбранные",
        onClick: this.showDeleteModal,
        disabled: isDeletingFacilities || selectedFacilities.length === 0
      },
      {
        label: "Экспортировать выбранные",
        onClick: () => this.exportSelectedFacilities(true)
      },
      {
        label: "Экспортировать все",
        onClick: () => this.exportSelectedFacilities(false)
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
            modalText="Удалить выбранные адреса?"
            open={deleteConfimationOpen}
            onConfirm={this.deleteFacilities}
            handleClose={this.showDeleteModal}
          />
          <AddFacilityModal
            open={addFacilityOpen}
            handleClose={this.showAddModal}
          />
          <div className={controls}>
            <div>
              <SquareButton>
                <CachedIcon fontSize="small" onClick={getFacilities} />
              </SquareButton>
              <SearchField width={400} onChange={this.searchByText} />
            </div>
            <div>
              <AddFacilityButton onClick={this.showAddModal} />
              <FacilityActions actions={facilitiesActions} />
            </div>
          </div>
          <div>
            <DataGrid
              elementAttr={{
                id: "gridContainer"
              }}
              ref={this.dataGridRef}
              wordWrapEnabled={true}
              dataSource={facilities}
              onSelectionChanged={this.selectFacilities}
              focusedRowEnabled
              errorRowEnabled={false}
              onRowClick={this.onRowClick}
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
        <OutsideClickHandler onOutsideClick={() => this.onRowClick(-1)}>
          <FacilityInfoDrawer
            facilityId={focusedFacility}
            open={focusedRowIndex !== -1}
          />
        </OutsideClickHandler>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isDeletingFacilities: state.facilities.isDeletingFacilities
});

const mapDispatchToProps = dispatch => ({
  getFacilities: () => dispatch(getFacilities()),
  requestFacilitiesDelete: idList => dispatch(deleteFacilities(idList))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FacilitiesTable));
