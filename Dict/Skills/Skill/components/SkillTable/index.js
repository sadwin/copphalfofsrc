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
  StateStoring,
  HeaderFilter
} from "devextreme-react/data-grid";
import { columns } from "./utils";
import CachedIcon from "@material-ui/icons/Cached";
import { withStyles } from "@material-ui/core/styles";
import SquareButton from "../../../../../ui/SquareButton";
import SearchField from "../../../../../ui/SearchField";
import DeleteConfirmationModal from './components/DeleteConfirmationModal';
// import AddSpecialityModal from './components/AddSpecialityModal';
import OutsideClickHandler from "react-outside-click-handler";
import Box from "../../../../../ui/Box";
import SkillInfoDrawer from "../SkillInfoDrawer";

import "./styles.css";

import AddSkill from "./components/AddSkill";
import SkillActions from "./components/SkillActions";
import { getSkillAllAction, deleteSkillAction } from "../../store/actions";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    "& #gridContainer": {
      height: "calc(100vh - 200px)"
    }
  },
  skillContainer: {
    background: "#FFFFFF",
    border: "1px solid #F6F6F5",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.05)",
    margin: "0 8px",
    // padding: "8px"
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

class SkillTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      selectedSkill: [],
      deleteConfimationOpen: false,
      focusedSkill: 122,
      focusedRowIndex: -1
    };
    
    this.selectSkill = this.selectSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.addSKill = this.addSKill.bind(this);
    this.searchByText = this.searchByText.bind(this);
    this.triggerColumnChooser = this.triggerColumnChooser.bind(this);
    this.exportSelectedSkill = this.exportSelectedSkill.bind(this);

    this.dataGridRef = React.createRef();
  }

  selectSkill({ selectedRowsData }) {
    this.setState({ selectedSkill: selectedRowsData });
  }

  deleteSkill() {
    const { deleteSkillAction } = this.props;
    const skillIdList = this.state.selectedSkill.map(({ id }) => id);

    deleteSkillAction(skillIdList);
  }

  addSKill () {
    console.log('add');
  }

  showDeleteModal() {
    this.setState({ deleteConfimationOpen: !this.state.deleteConfimationOpen });
  }

  searchByText(e) {
    const text = e.target.value;
    this.dataGridRef.current.instance.searchByText(text);
  }

  triggerColumnChooser() {
    this.dataGridRef.current.instance.showColumnChooser()
  }

  exportSelectedSkill(selectionOnly) {
    this.dataGridRef.current.instance.exportToExcel(selectionOnly);
  }

  onRowClick = (e) => {
    const focusedSkill = e !== -1 ? e.data.id : e;
    const focusedRowIndex = e !== -1 ? e.rowIndex : e;
    this.setState({ focusedSkill, focusedRowIndex });
  }

  render() {
    const { 
      selectedSkill,
      deleteConfimationOpen,
      focusedRowIndex,
      focusedSkill
      } = this.state;
    const {
      skillList,
      classes,
      isDeletingSkill,
      getSkillAction
    } = this.props;
    const {root, skillContainer, controls } = classes;

    const addSkillAction = [
      {
        label: "Создать новую (Конструктор)",
        onClick: () => this.addSKill()
      },
    ]

    const skillActions = [
      {
        label: "Удалить выбранные",
        onClick: this.showDeleteModal,
        disabled: isDeletingSkill || selectedSkill.length === 0
      },
      {
        label: "Экспортировать выбранные",
        onClick: () => this.exportSelectedSkill(true)
      },
      {
        label: "Экспортировать все",
        onClick: () => this.exportSelectedSkill(false)
      },
      {
        label: "Выбор видимых столбцов",
        onClick: this.triggerColumnChooser
      }
    ];


    return (
      <div className={root}>
      <Box>
      <div className={skillContainer}>
         <DeleteConfirmationModal
            open={deleteConfimationOpen}
            onConfirm={this.deleteSkill}
            handleClose={this.showDeleteModal}
          />
        <div className={controls}>
          <div>
            <SquareButton>
              <CachedIcon fontSize="small" onClick={getSkillAction} />
            </SquareButton>
            <SearchField width={400} onChange={this.searchByText} />
          </div>
          <div>
            <AddSkill actions={addSkillAction} />
            <SkillActions actions={skillActions} />
          </div>
        </div>
        <DataGrid
          elementAttr={{
            id: "gridContainer"
          }}
          ref={this.dataGridRef}
          wordWrapEnabled={true}
          dataSource={skillList}
          onSelectionChanged={this.selectSkill}
          focusedRowEnabled
          errorRowEnabled={false}
          onRowClick={this.onRowClick}
          focusedRowIndex={focusedRowIndex}
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
                    storageKey={'SkillTable'}/>
          {columns.map(column => (
            <Column key={column.dataField} {...column} />
          ))}
          <HeaderFilter visible={true} />
          <FilterRow visible={true} />
          <Scrolling mode="virtual" />
          <LoadPanel enabled />
        </DataGrid>
      </div>
      </Box>
        <OutsideClickHandler onOutsideClick={() => this.onRowClick(-1)}>
          <SkillInfoDrawer
            skillId={focusedSkill}
            open={focusedRowIndex !== -1}
          />
        </OutsideClickHandler>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isDeletingSkill: state.skill.isDeletingSkill
});

const mapDispatchToProps = dispatch => ({
  getSkillAction: () => dispatch(getSkillAllAction()),
  deleteSkillAction: idList => dispatch(deleteSkillAction(idList))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SkillTable));
