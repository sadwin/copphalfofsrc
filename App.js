import "@fortawesome/fontawesome-free/css/all.min.css";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.material.blue.light.compact.css";

import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import React from "react";
import Drawer from "devextreme-react/drawer";
import { YMaps as Map } from "react-yandex-maps";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import RouteAdviceContext from "./RouteAdviceContext";
import AppSidebar from "./AppSidebar";
import AppToolbar from "./AppToolbar";
import DictCollection from "./Dict/DictCollection";
import DictDocCategoryTable from "./Dict/DocCategory/DictDocCategoryTable";
import DictDocCategoryView from "./Dict/DocCategory/View/DictDocCategoryView";
import DictDocTypeTable from "./Dict/DocType/DictDocTypeTable";
import DictDocTypeView from "./Dict/DocType/View/DictDocTypeView";
import DictRegionTable from "./Dict/Region/DictRegionTable";
import DictRegionView from "./Dict/Region/View/DictRegionView";
import SecuredRoute from "./SecuredRoute";
import DictMunicipalTable from "./Dict/Municipal/DictMunicipalTable";
import DictMunicipalView from "./Dict/Municipal/View/DictMunicipalView";
import PersonTable from "./Person/PersonTable";
import PersonView from "./Person/View/PersonView";
import DictPersonSkillStateTable from "./Dict/PersonSkillState/DictPersonSkillStateTable";
import DictPersonSkillStateView from "./Dict/PersonSkillState/View/DictPersonSkillStateView";
import DictWorldSkillCategoryTable from "./Dict/WorldSkillCategory/DictWorldSkillCategoryTable";
import DictWorldSkillCategoryView from "./Dict/WorldSkillCategory/View/DictWorldSkillCategoryView";
import DictWorldSkillTypeTable from "./Dict/WorldSkillType/DictWorldSkillTypeTable";
import DictWorldSkillTypeView from "./Dict/WorldSkillType/View/DictWorldSkillTypeView";
import DictWorldSkillStatusTable from "./Dict/WorldSkillStatus/DictWorldSkillStatusTable";
import DictWorldSkillStatusView from "./Dict/WorldSkillStatus/View/DictWorldSkillStatusView";
import DictWorldSkillTable from "./Dict/WorldSkill/DictWorldSkillTable";
import DictWorldSkillView from "./Dict/WorldSkill/View/DictWorldSkillView";
import DictLegalFormTable from "./Dict/LegalForm/DictLegalFormTable";
import DictLegalFormView from "./Dict/LegalForm/View/DictLegalFormView";
import OrganizationTable from "./Organization/OrganizationTable";
import OrganizationView from "./Organization/View/OrganizationView";
import FacilitiesTable from "./Facility/pages/FacilitiesList";
import FacilityEdit from "./Facility/pages/FacilityEdit";
import EntityNotFound from "./util/EntityNotFound";
import DictCompetFGOS from "./ManageOOP/Resources/DictCompetFGOS"
import DictSkills from "./Dict/Skills/DictSkills/DictSkills";
import DictSpeciality from "./Dict/Skills/Speciality/DictSpeciality";
import Skill from "./Dict/Skills/Skill/Skill";
import SiteTable from "./Site/SiteTable";
import ReferenceTable from "./Reference/ReferenceTable";
import SkillView from "./Dict/Skills/Skill/View/SkillView";
import RoomsTable from "./Room/pages/RoomsList";
import SkillEdit from "./Dict/Skills/Skill/Constructor/SkillEdit";
import Constructor from "./Constructor/Constructor"
import ExpertiseTable from "./Constructor/Expert/pages/ExpertiseList";
import ModuleTable from "./Constructor/Module/pages/ModuleList";
import ProgramTable from "./Constructor/Program/pages/ProgramList";
import ManageResources from "./ManageOOP/ManageResources"
import ResourcesOrg from "./ManageOOP/ResourcesOrg"
import OrgRequestTable from "./ManageOOP/Resources/Organizations/OrgRequests/pages/OrgRequestList"
import ResourcesMatTech from "./ManageOOP/ResourcesMatTech"
import MatTechNomenclature from "./ManageOOP/Resources/MatTech/Nomenclature";
import ResourcesOPMod from "./ManageOOP/ResourcesOPMod"
import ResourcesManageExpertise from "./ManageOOP/Resources/OpMod/ManageExpertise";
import ResourcesMyOPMod from "./ManageOOP/Resources/OpMod/MyOPMod";
import ManageOrders from "./ManageOOP/ManageOrders"
import OrgOrders from "./ManageOOP/Orders/OrgOrders"
import MyInboxOrders from "./ManageOOP/Orders/OrgOrders/MyInboxOrders"
import MyOutboxOrders from "./ManageOOP/Orders/OrgOrders/MyOutboxOrders"
import CoppOrdersTable from "./ManageOOP/Orders/CoppOrders/pages/CoppOrderList"
import OrdersCustomers from "./ManageOOP/Orders/Customers";
import PortfolioCustomersTable from "./ManageOOP/Orders/Customers/PortfolioCustomers/pages/PortCustList";
import PortfolioContractsTable from "./ManageOOP/Orders/Customers/PortfolioContracts/pages/PortContrList";
import ConfirmationDialog from "./ui/ConfirmationDialog";
import RoomEdit from "./Room/pages/RoomEdit";
import ResourceTable from "./Resources/pages/ResourceList";
import ResourceEdit from "./Resources/pages/ResourceEdit";
import Catalog from "./Catalog";
import Dashboard from "./Dashboard";
import Schedule from "./Schedule";
import Quiz from "./Quiz";

const DrawerWithRouter = withRouter(Drawer);
const MainToolbarWithRouter = withRouter(AppToolbar);
const MainSidebarWithRouter = withRouter(AppSidebar);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.routeAdviceRef = {
      aroundInvoke: null,
      callback: null
    };
    this.state = {
      opened: false,
      confirmMessage: "Данные были изменены, сохранить перед продолжением?",
      confirmVisible: false
    };

    this.getUserConformation = this.getUserConformation.bind(this);
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.handleUserConfirmYes = this.handleUserConfirmYes.bind(this);
    this.handleUserConfirmNo = this.handleUserConfirmNo.bind(this);
    this.handleUserConfirmCancel = this.handleUserConfirmCancel.bind(this);
  }

  getUserConformation(msg, callback) {
    this.setState({
      confirmMessage: msg,
      confirmVisible: true
    });
    this.routeAdviceRef.callback = callback;
  }

  handleUserConfirmYes() {
    this.setState({
      confirmVisible: false
    });
    if (this.routeAdviceRef.callback != null) {
      if (typeof this.routeAdviceRef.aroundInvoke === "function") {
        this.routeAdviceRef.aroundInvoke(this.routeAdviceRef.callback);
      } else {
        this.routeAdviceRef.callback(true);
      }
    }
  }

  handleUserConfirmNo() {
    this.setState({
      confirmVisible: false
    });
    if (this.routeAdviceRef.callback != null) {
      this.routeAdviceRef.callback(true);
    }
  }

  handleUserConfirmCancel() {
    this.setState({
      confirmVisible: false
    });
    if (this.routeAdviceRef.callback != null) {
      this.routeAdviceRef.callback(false);
    }
  }

  handleExpandClick() {
    this.setState(state => {
      return {
        opened: !state.opened
      };
    });
  }

  render() {
    return (
      <BrowserRouter getUserConfirmation={this.getUserConformation}>
        <RouteAdviceContext.Provider value={this.routeAdviceRef}>
          <Map>
            <div>
              <MainToolbarWithRouter onMenuClick={this.handleExpandClick} />
              <div>
                <MainSidebarWithRouter
                  opened={this.state.opened}
                  setOpen={this.handleExpandClick}
                />
                <div>
                  {" "}
                  {/* Workaround T713569 */}
                  <Switch>
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dashboard"
                      component={Dashboard}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/catalog"
                      component={Catalog}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/schedule"
                      component={Schedule}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/quiz"
                      component={Quiz}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict"
                      component={DictCollection}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/doc-category"
                      component={DictDocCategoryTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/doc-category/:id"
                      component={DictDocCategoryView}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/doc-type"
                      component={DictDocTypeTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/doc-type/:id"
                      component={DictDocTypeView}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/doc-type"
                      component={DictDocTypeTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/doc-type/:id"
                      component={DictDocTypeView}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/region"
                      component={DictRegionTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/region/:id"
                      component={DictRegionView}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/municipal"
                      component={DictMunicipalTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/municipal/:id"
                      component={DictMunicipalView}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/person-skill-state"
                      component={DictPersonSkillStateTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/person-skill-state/:id"
                      component={DictPersonSkillStateView}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/world-skill-category"
                      component={DictWorldSkillCategoryTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/world-skill-category/:id"
                      component={DictWorldSkillCategoryView}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/world-skill-type"
                      component={DictWorldSkillTypeTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/world-skill-type/:id"
                      component={DictWorldSkillTypeView}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/world-skill-status"
                      component={DictWorldSkillStatusTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/world-skill-status/:id"
                      component={DictWorldSkillStatusView}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/world-skill"
                      component={DictWorldSkillTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/world-skill/:id"
                      component={DictWorldSkillView}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/legal-form"
                      component={DictLegalFormTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/legal-form/:id"
                      component={DictLegalFormView}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/manage/resources/competfgos"
                      component={DictCompetFGOS}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/skills"
                      component={DictSkills}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/skills/speciality"
                      component={DictSpeciality}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/skills/skill"
                      component={Skill}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/skills/skill/edit/:id"
                      component={SkillEdit}
                    />
                     <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/dict/skills/skill/:id"
                      component={SkillView}
                    />

                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/person"
                      component={PersonTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/person/:id"
                      component={PersonView}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/organization"
                      component={OrganizationTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/organization/:id"
                      component={OrganizationView}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/facilities/"
                      component={FacilitiesTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/facilities/:id"
                      component={FacilityEdit}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/rooms/"
                      component={RoomsTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/rooms/:id"
                      component={RoomEdit}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/site"
                      component={SiteTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/reference"
                      component={ReferenceTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/resources/"
                      component={ResourceTable}
                      />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/constructor"
                      component={Constructor}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/constructor/expertise"
                      component={ExpertiseTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/constructor/modules"
                      component={ModuleTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/constructor/programs"
                      component={ProgramTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/resources/:id"
                      component={ResourceEdit}
                      />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/manage/resources"
                      component={ManageResources}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/manage/resources/org"
                      component={ResourcesOrg}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/manage/resources/org/requests"
                      component={OrgRequestTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/manage/resources/mattech"
                      component={ResourcesMatTech}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/manage/resources/mattech/nomanclature"
                      component={MatTechNomenclature}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/manage/resources/programs"
                      component={ResourcesOPMod}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/manage/resources/programs/myprograms"
                      component={ResourcesMyOPMod}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/manage/resources/programs/expertise"
                      component={ResourcesManageExpertise}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/manage/orders"
                      component={ManageOrders}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/manage/orders/orgorders"
                      component={OrgOrders}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/manage/orders/orgorders/myinbox"
                      component={MyInboxOrders}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/manage/orders/orgorders/myoutbox"
                      component={MyOutboxOrders}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/manage/orders/copporders"
                      component={CoppOrdersTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/manage/orders/customers"
                      component={OrdersCustomers}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/manage/orders/customers/custlist"
                      component={PortfolioCustomersTable}
                    />
                    <SecuredRoute
                      role={"admin"}
                      exact
                      path="/work/app/manage/orders/customers/contracts"
                      component={PortfolioContractsTable}
                    />
                    <Route component={EntityNotFound} />
                  </Switch>
                </div>
                <ConfirmationDialog />
                <Dialog
                  disableBackdropClick
                  disableEscapeKeyDown
                  maxWidth={"xs"}
                  open={this.state.confirmVisible}
                >
                  <DialogTitle>Подтверждение перехода</DialogTitle>
                  <DialogContent dividers>
                    <p>{this.state.confirmMessage}</p>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      variant="contained"
                      autoFocus
                      onClick={this.handleUserConfirmYes}
                      color="primary"
                    >
                      Да
                    </Button>
                    <Button
                      variant="contained"
                      onClick={this.handleUserConfirmNo}
                      color="secondary"
                    >
                      Нет
                    </Button>
                    <Button
                      variant="contained"
                      onClick={this.handleUserConfirmCancel}
                    >
                      Отмена
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </div>
          </Map>
        </RouteAdviceContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
