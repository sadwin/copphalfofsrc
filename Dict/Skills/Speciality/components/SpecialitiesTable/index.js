import React from "react";
import { connect } from "react-redux";

import DataGrid, {
  Column,
  LoadPanel,
  Scrolling,
  FilterRow,
  Selection,
  ColumnChooser,
  ColumnFixing,
  StateStoring
} from "devextreme-react/data-grid";
import { columns } from "./utils";
import CachedIcon from "@material-ui/icons/Cached";
import { withStyles } from "@material-ui/core/styles";
import SquareButton from "../../../../../ui/SquareButton";
import SearchField from "../../../../../ui/SearchField";
import DeleteConfirmationModal from './components/DeleteConfirmationModal';
import AddSpecialityModal from './components/AddSpecialityModal';
import "./styles.css";

import AddSpeciality from "./components/AddSpeciality";
import SpecialityActions from "./components/SpecialityActions";
import { getSpecialities, deleteSpecialitiesAction } from "../../store/actions";

const styles = {
  specialitiesContainer: {
    background: "#FFFFFF",
    border: "1px solid #F6F6F5",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.05)",
    margin: "0 8px",
    padding: "8px"
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

class SpecialitiesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      selectedSpecialities: [],
      deleteConfimationOpen: false,
      AddSpecialityOpen: false,

    };
    
    this.selectSpecialities = this.selectSpecialities.bind(this);
    this.deleteSpecialities = this.deleteSpecialities.bind(this);
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.showAddModal = this.showAddModal.bind(this);
    this.searchByText = this.searchByText.bind(this);
    this.triggerColumnChooser = this.triggerColumnChooser.bind(this);

    this.dataGridRef = React.createRef();
  }

  selectSpecialities({ selectedRowsData }) {
    this.setState({ selectedSpecialities: selectedRowsData });
  }

  deleteSpecialities() {
    const { requestSpecialitiesDelete } = this.props;
    const specialitiesIdList = this.state.selectedSpecialities.map(({ id }) => id);

    requestSpecialitiesDelete(specialitiesIdList);
  }

  showDeleteModal() {
    this.setState({ deleteConfimationOpen: !this.state.deleteConfimationOpen });
  }

  showAddModal() {
    this.setState({ AddSpecialityOpen: !this.state.AddSpecialityOpen });
  }

  searchByText(e) {
    const text = e.target.value;
    this.dataGridRef.current.instance.searchByText(text);
  }

  triggerColumnChooser() {
    this.dataGridRef.current.instance.showColumnChooser()
  }

  render() {
    const { 
      selectedSpecialities,
      deleteConfimationOpen,
      AddSpecialityOpen
      } = this.state;
    const {
      specialities,
      classes,
      isDeletingSpecialities,
      getSpecialities
    } = this.props;
    const { specialitiesContainer, controls } = classes;

    const specialitiesActions = [
      {
        label: "Удалить выбранные",
        onClick: this.showDeleteModal,
        disabled: isDeletingSpecialities || selectedSpecialities.length === 0
      },
      {
        label: "Выбор видимых столбцов",
        onClick: this.triggerColumnChooser
      }
    ];

    return (
      <div className={specialitiesContainer}>
         <DeleteConfirmationModal
            open={deleteConfimationOpen}
            onConfirm={this.deleteSpecialities}
            handleClose={this.showDeleteModal}
          />
           <AddSpecialityModal
            open={AddSpecialityOpen}
            handleClose={this.showAddModal}
          />
        <div className={controls}>
          <div>
            <SquareButton>
              <CachedIcon fontSize="small" onClick={getSpecialities} />
            </SquareButton>
            <SearchField width={400} onChange={this.searchByText} />
          </div>
          <div>
            <AddSpeciality onClick={this.showAddModal} />
            <SpecialityActions actions={specialitiesActions} />
          </div>
        </div>
        <DataGrid
          elementAttr={{
            id: "gridContainer"
          }}
          ref={this.dataGridRef}
          wordWrapEnabled={true}
          dataSource={specialities}
          onSelectionChanged={this.selectSpecialities}
          showBorders
        >
          <Selection
            mode="multiple"
            showCheckBoxesMode="always"
            showBorders={true}
          />
           <StateStoring
                    enabled={true}
                    type={'localStorage'}
                    savingTimeout={0}
                    storageKey={'SpecialitiesTable'}/>
          {columns.map(column => (
            <Column key={column.dataField} {...column} />
          ))}
          <FilterRow visible={true} />
          <Scrolling mode="virtual" />
          <LoadPanel enabled />
        </DataGrid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isDeletingSpecialities: state.specialities.isDeletingSpecialities
});

const mapDispatchToProps = dispatch => ({
  getSpecialities: () => dispatch(getSpecialities()),
  requestSpecialitiesDelete: idList => dispatch(deleteSpecialitiesAction(idList))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SpecialitiesTable));
