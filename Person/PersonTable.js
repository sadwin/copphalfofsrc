import "./PersonTable.css";
import React from "react";
import DataGrid, {
  Column,
  Scrolling,
  Sorting,
  FilterRow,
  HeaderFilter,
  ColumnChooser,
  SearchPanel,
  Export,
  Selection,
  LoadPanel
} from "devextreme-react/data-grid";
import { Template } from "devextreme-react/core/template";
import CachedIcon from "@material-ui/icons/Cached";
import AddIcon from "@material-ui/icons/Add";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { AddPersonDialog } from "./Components/AddPersonDialog";
import InfoDrawer from "../ui/InfoDrawer";
import { ClickAwayListener } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PersonViewCard from "./View/PersonViewCard";
import SquareButton from "../ui/SquareButton";
import Breadcrumbs from "../ui/Breadcrumbs";
import { connect } from "react-redux";
import { loadList, deletePersons } from "./View/fetch";
import { confirmAction } from "../ui/uiModule";

function RolesCell(cellData) {
  return cellData.value.map(role => role.symbol).join(",");
}

function ContactsCell(cellData) {
  return (
    <span>
      {cellData.data.email}
      <br />
      {cellData.data.phone}
    </span>
  );
}

function OrganizationsCell(cellData) {
  return (
    <span>
      {cellData.data.organizations.map(org => org.name).join("<br />")}
    </span>
  );
}

function AccountsCell(cellData) {
  return (
    <span>{cellData.data.accounts.map(account => account.type).join(" ")}</span>
  );
}

function RegistrationCell(cellData) {
  return cellData.data.sysRegDate;
}

function StatusCell(cellData) {
  return cellData.data.sysRegDate;
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column"
  },
  tableContainer: {
    background: "#FFFFFF",
    border: "1px solid #F6F6F5",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.05)",
    margin: "0 8px",
    padding: "8px",
    transition: "all .2s"
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
  },
  dataGrid: {
    height: "calc(100vh - 153px)"
  }
};

const items = [
  {
    label: "Управление ООП",
    link: "#"
  },
  {
    label: "Ресурсы",
    link: "/work/app/manage/resources"
  },
  {
    label: "Кадровые ресурсы",
    link: "#"
  }
];

class PersonTable extends React.Component {
  gridRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      totalCount: 0,
      showAddPersonDialog: false,
      focusedId: -1
    };
  }

  componentDidMount() {
    const { loadList } = this.props;
    loadList();
  }

  componentDidUpdate() {
    const grid = this.gridRef.current.instance;
    if (this.props.viewState === 0) {
      grid.beginCustomLoading();
    } else {
      grid.endCustomLoading();
    }
  }

  render() {
    const { classes, personsList } = this.props;
    return (
      <>
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <div className={classes.root}>
            <div>
              <Breadcrumbs items={items} />
              <div className={classes.tableContainer}>
                <DataGrid
                  className={classes.dataGrid}
                  keyExpr="id"
                  dataSource={personsList}
                  showBorders={true}
                  wordWrapEnabled={true}
                  focusedRowEnabled={true}
                  allowColumnReordering={true}
                  onToolbarPreparing={this.handleToolbarPreparing}
                  onRowDblClick={this.openRecord}
                  onRowClick={this.handleRowClick}
                  ref={this.gridRef}
                >
                  <Selection
                    mode="multiple"
                    selectAllMode="page"
                    showCheckBoxesMode="always"
                  />
                  <Export
                    enabled={false}
                    fileName={"Пользователи системы"}
                    allowExportSelectedData={true}
                  />
                  <SearchPanel
                    visible={true}
                    width={300}
                    placeholder={"Поиск..."}
                  />
                  <ColumnChooser
                    allowSearch={true}
                    mode={"select"}
                    enabled={false}
                    locateInMenu="never"
                  />
                  <FilterRow visible={true} applyFilter="auto" />
                  <HeaderFilter visible={true} />
                  <Sorting mode={"multiple"} />
                  <Scrolling mode={"virtual"} />
                  <LoadPanel enabled />

                  <Column
                    dataField={"id"}
                    dataType={"string"}
                    caption={"Код"}
                  />
                  <Column
                    dataField={"name"}
                    dataType={"string"}
                    caption={"ФИО"}
                  />
                  <Column
                    dataField={"roles"}
                    caption={"Роль в системе"}
                    cellRender={RolesCell}
                  />
                  <Column
                    dataField={"municipalName"}
                    dataType={"string"}
                    caption={"МО"}
                  />
                  <Column
                    dataField={"contacts"}
                    caption={"Контакты"}
                    cellRender={ContactsCell}
                  />
                  <Column
                    dataField={"snils"}
                    dataType={"string"}
                    caption={"СНИЛС"}
                  />
                  <Column
                    dataField={"inn"}
                    dataType={"string"}
                    caption={"ИНН"}
                  />
                  <Column
                    dataField={"snils"}
                    dataType={"string"}
                    caption={"СНИЛС"}
                  />
                  <Column
                    dataField={"birthday"}
                    dataType={"date"}
                    caption={"Дата рождения"}
                  />
                  <Column
                    dataField={"organizations"}
                    caption={"Организации"}
                    cellRender={OrganizationsCell}
                  />
                  <Column
                    dataField={"note"}
                    dataType={"string"}
                    caption={"Примечание"}
                  />

                  <Column
                    dataField={"accounts"}
                    caption={"Аккаунты"}
                    cellRender={AccountsCell}
                  />

                  <Column
                    dataField={"registration"}
                    caption={"Регистрация"}
                    cellRender={RegistrationCell}
                  />

                  <Column
                    dataField={"status"}
                    caption={"Статус"}
                    cellRender={StatusCell}
                  />

                  <Template name="refresh" render={this.renderRefresh} />
                  <Template name="newPerson" render={this.renderNewPerson} />
                  <Template name="menu" render={this.renderMoreMenu} />
                </DataGrid>
              </div>
            </div>
          </div>
        </ClickAwayListener>
        <InfoDrawer open={this.state.focusedId !== -1}>
          <PersonViewCard id={this.state.focusedId} />
        </InfoDrawer>
        <AddPersonDialog
          visible={this.state.showAddPersonDialog}
          onHiding={this.handleCloseDialog}
        />
      </>
    );
  }

  handleRowClick = e => {
    const focusedId = e !== -1 ? e.data.id : e;
    this.setState({ focusedId });
  };

  handleClickAway = () => {
    this.setState({ focusedId: -1 });
  };

  handleRefresh = () => {
    const { loadList } = this.props;
    loadList();
  };

  renderRefresh = () => {
    const { viewState } = this.props;
    return (
      <SquareButton
        aria-label="Refresh"
        onClick={this.handleRefresh}
        disabled={viewState === 0}
      >
        <CachedIcon fontSize="small" />
      </SquareButton>
    );
  };

  renderNewPerson = () => {
    return (
      <SquareButton aria-label="New person" onClick={this.handleAddPersonClick}>
        <AddIcon fontSize="small" />
      </SquareButton>
    );
  };

  handleAddPersonClick = () => {
    this.setState({ showAddPersonDialog: true });
  };

  handleCloseDialog = () => {
    this.setState({ showAddPersonDialog: false });
  };

  renderMoreMenu = () => {
    const MoreMenu = () => {
      const [anchorEl, setAnchorEl] = React.useState(null);

      const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };

      const handleColumnChooser = () => {
        const grid = this.gridRef.current.instance;
        grid.showColumnChooser();
        handleClose();
      };

      const handleExportAll = () => {
        const grid = this.gridRef.current.instance;
        grid.exportToExcel();
        handleClose();
      };

      const handleExportSelected = () => {
        const grid = this.gridRef.current.instance;
        grid.exportToExcel(true);
        handleClose();
      };

      const handleDelete = () => {
        const { confirmAction } = this.props;
        const grid = this.gridRef.current.instance;
        const rowKeys = grid.getSelectedRowKeys();
        confirmAction({ action: deletePersons(rowKeys), message: "Удалить выбранных сотрудников?" });
      };

      return (
        <div>
          <SquareButton aria-label="Menu" onClick={handleClick} size="small">
            <MoreVertIcon fontSize="small" />
          </SquareButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            transformOrigin={{
              vertical: -42,
              horizontal: "left"
            }}
          >
            <MenuItem onClick={handleDelete}>Удалить выбранные</MenuItem>
            <MenuItem onClick={handleExportSelected}>
              Экспортировать выбранные
            </MenuItem>
            <MenuItem onClick={handleExportAll}>Экспортировать все</MenuItem>
            <MenuItem onClick={handleColumnChooser}>
              Выбор видимых столбцов
            </MenuItem>
            <MenuItem onClick={handleClose}>Импорт данных</MenuItem>
          </Menu>
        </div>
      );
    };

    return <MoreMenu />;
  };

  handleToolbarPreparing = e => {
    const toolbarItems = e.toolbarOptions.items;
    toolbarItems.unshift({
      location: "before",
      template: "refresh"
    });

    // toolbarItems.push({
    //   location: "before",
    //   template: "totalCount"
    // });

    toolbarItems.push({
      location: "after",
      template: "newPerson"
    });

    toolbarItems.push({
      location: "after",
      template: "menu"
    });

    for (const toolbarItem of toolbarItems) {
      if (toolbarItem.name === "searchPanel") {
        toolbarItem.location = "before";
      }
    }
  };

  updateTotalCount = e => {
    this.setState({
      totalCount: e.component.totalCount()
    });
  };

  openRecord = e => {
    this.props.history.push("/work/app/person/" + e.data.id);
  };

  goBack = () => {
    this.props.history.push("/work/app");
  };
}

const mapStateToProps = state => ({
  personsList: state.personView.personsList,
  viewState: state.personView.viewState
});

const mapDispatchToProps = {
  loadList,
  confirmAction
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(PersonTable)
);
