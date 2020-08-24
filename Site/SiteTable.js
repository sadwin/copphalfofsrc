import React from 'react';
import DataGrid, {
  Column,
  Scrolling,
  Sorting,
  FilterRow,
  HeaderFilter,
  ColumnChooser,
  SearchPanel,
  Export,
  FilterBuilderPopup
} from 'devextreme-react/data-grid';

import Button from "devextreme-react/button";
import DataSource from "devextreme/data/data_source";
import CustomStore from 'devextreme/data/custom_store';
import {Template} from 'devextreme-react/core/template';
import notify from 'devextreme/ui/notify';
import SubMenu from './SiteSubMenu';
import SquareButton from "../ui/SquareButton";

import Breadcrumbs from "../ui/Breadcrumbs";
import CachedIcon from '@material-ui/icons/Cached';
import AddIcon from '@material-ui/icons/Add';
import Link from '@material-ui/core/Link';

import AddSiteDialog from "./components/AddSiteDialog";
import DeleteSiteDialog from './components/DeleteSiteDialog';
import LinkCell from './LinkCell';

import axios from "axios";

import './SiteTable.css';

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
    label: "Информационно-коммуникационные ресурсы",
    link: "#"
  },
];


class SiteTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalCount: 0,
      subMenuOpened: true,
      modalOpen: false,
      showAddSiteDialog: false,
      showDeleteSiteDialog: false,
    };
    this.filterBuilderPopupPosition = {of: window};
    this.dataSource = new DataSource({
      store: new CustomStore({
        key: "id",
        load: function (loadOptions) {
          return axios.get("/work/api/site", {
            headers: {
              'Accept': 'application/json'
            },
          }).then(response => {
            return {
              data: response.data
            }
          }).catch(() => notify({
            closeOnClick: true,
            closeOnOutsideClick: true,
            message: 'Не удалось загрузить список информационно-коммуникационных ресурсов'
          }, 'error'))
        }
      })
    });
    this.handleRowDblClick = this.handleRowDblClick.bind(this);
    this.handleToolbarPreparing = this.handleToolbarPreparing.bind(this);

    this.handleBackButton = this.handleBackButton.bind(this);
    this.renderBackButton = this.renderBackButton.bind(this);

    this.handleRefreshButton = this.handleRefreshButton.bind(this);
    this.renderRefreshButton = this.renderRefreshButton.bind(this);

    this.handleAddButton = this.handleAddButton.bind(this);
    this.renderAddButton = this.renderAddButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.triggerColumnChooser = this.triggerColumnChooser.bind(this);
    this.handleAddSiteClick = this.handleAddSiteClick.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.handleDeleteSiteClick = this.handleDeleteSiteClick.bind(this);
    this.handleDeleteSiteClose = this.handleDeleteSiteClose.bind(this);
    this.handleDeleteSite = this.handleDeleteSite.bind(this);

    this.dataGridRef = React.createRef();
  }

  triggerColumnChooser() {
    this.dataGridRef.current.instance.showColumnChooser();
  }

  exportSelectedFacilities(selectionOnly) {
    this.dataGridRef.current.instance.exportToExcel(selectionOnly);
  }

  render() {
    const menuActions = [
      {
        label: "Удалить выбранные",
        onClick: this.handleDeleteSiteClick,
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
      <div className="table-page">
        <Breadcrumbs items={items} />

        <div className="table-wrap">
          <DataGrid
            dataSource={this.dataSource}
            selection={{mode: 'multiple'}}
            showBorders={true}
            ref={this.dataGridRef}
            wordWrapEnabled={true}
            height={'100%'}
            allowColumnReordering={true}
            allowColumnResizing={true}
            columnAutoWidth={true}
            onToolbarPreparing={this.handleToolbarPreparing}
            onRowDblClick={this.handleRowDblClick}
            class="mainTable">
            <Export fileName={'ОПФ'} allowExportSelectedData={true}/>
            <SearchPanel visible={true}
                         width={300}
                         placeholder={'Поиск...'}/>

            <ColumnChooser allowSearch={true} mode={'select'}/>
            <FilterRow visible={true} applyFilter="auto"/>
            <FilterBuilderPopup position={this.filterBuilderPopupPosition}/>
            <HeaderFilter visible={true}/>
            <Sorting mode={'multiple'}/>
            <Scrolling mode={'virtual'}/>

            <Column
              dataField={'id'}
              dataType={'number'}
              caption={'ID'}
              width={'80'}
              alignment={'left'} />
            <Column
              dataField={'assign'}
              dataType={'string'}
              caption={'Назначение'}
            />
            <Column
              dataField={'name'}
              dataType={'string'}
              caption={'Название'}
              cellRender={LinkCell}
            />
            <Column
              dataField={'siteAccessName'}
              dataType={'string'}
              caption={'Условия доступа'}
            />
            <Column
              dataField={'orgName'}
              dataType={'string'}
              caption={'Организация'}
            />
            <Column
              dataField={'depName'}
              dataType={'string'}
              caption={'Подразделение'}
            />

            <Template name={'refreshButton'} render={this.renderRefreshButton}/>
            <Template name={'subMenuButton'} render={() => this.renderSubMenuButton(menuActions)}
                      onClick={this.handleClick}/>

            <Template name={'addButton'} render={this.renderAddButton}/>
          </DataGrid>
          <AddSiteDialog
            visible={this.state.showAddSiteDialog}
            onHiding={this.handleCloseDialog}
            handleSubmit={this.handleAddButton}
          />
          <DeleteSiteDialog
            visible={this.state.showDeleteSiteDialog}
            onHiding={this.handleDeleteSiteClose}
            deleteAction={this.handleDeleteSite}
          />
        </div>
      </div>
    )
  }

  handleToolbarPreparing(e) {
    let toolbarItems = e.toolbarOptions.items;
    toolbarItems.unshift(
      {
        location: 'before',
        template: 'refreshButton'
      });
    for (let toolbarItem of toolbarItems) {
      if (toolbarItem.name === 'searchPanel') {
        toolbarItem.location = 'before';
      }
    }
    toolbarItems.push({
      location: 'after',
      template: 'addButton'
    });
    toolbarItems.push({
      location: 'after',
      template: 'subMenuButton'
    });
  }

  handleOpenModal() {
    this.setState({
      modalOpen: true,
    });
  }

  handleCloseModal() {
    this.setState({
      modalOpen: false,
    });
  }

  handleClick = () => {
    this.setState({
      subMenuOpened: !this.state.subMenuOpened
    });
  };

  handleClose = () => {
    this.setState({
      subMenuOpened: !this.state.subMenuOpened
    });
  };

  handleRowDblClick(e) {
    this.props.history.push(e.data.url);
  }

  handleAddButton(data) {
    axios.post("/work/api/site",
      data,
      {
        headers: {
          'Accept': 'application/json'
        },
      }).then(response => {
        this.setState({showAddSiteDialog: false});
        this.dataSource.reload();
    }).catch(() => {
      notify({
        closeOnClick: true,
        closeOnOutsideClick: true,
        message: 'Не удалось создать новую запись'
      }, 'error');
    })
  }

  handleDeleteSite() {
    const selectedRows = this.dataGridRef.current.instance.getSelectedRowsData();

    selectedRows.forEach((item, key) => {
      axios.delete(`/work/api/site/${item.id}`, {
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        this.dataSource.reload();
      }).catch(() => {
        notify({
          closeOnClick: true,
          closeOnOutsideClick: true,
          message: 'Не удалось удалить запись'
        }, 'error');
      })
    });
  }

  handleAddSiteClick() {
    this.setState({showAddSiteDialog: true});
  }

  handleDeleteSiteClick() {
    this.setState({showDeleteSiteDialog: true});
  }

  handleDeleteSiteClose() {
    this.setState({showDeleteSiteDialog: false});
  }

  renderAddButton() {
    return (<SquareButton onClick={this.handleAddSiteClick} aria-label="add" className="addBtn">
      <AddIcon/>
    </SquareButton>);
  }

  handleCloseDialog = () => {
    this.setState({showAddSiteDialog: false});
  };

  renderSubMenuButton(menuActions) {
    return (<SubMenu actions={menuActions} style={{
      border: '1px solid #CACCD1',
      borderRadius: '3px',
      background: '#fff',
    }}/>);
  }

  handleRefreshButton() {
    this.dataSource.reload();
  }

  renderRefreshButton() {
    return (
      <SquareButton
        aria-label="Refresh"
        onClick={this.handleRefreshButton}
      >
        <CachedIcon fontSize="small" />
      </SquareButton>
    );
  }

  handleBackButton() {
    this.props.history.push("/work/app/dict");
  }

  renderBackButton() {
    return (<Button icon={'fas fa-chevron-left'} onClick={this.handleBackButton}/>);
  }
}

export default SiteTable;
