import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Keycloak from "keycloak-js";
import SecurityContext from "./SecurityContext";
import axios from "axios";
import ruMessages from "devextreme/localization/messages/ru.json";
import {locale, loadMessages} from "devextreme/localization";
import {applyMiddleware, createStore, combineReducers, compose} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {Provider} from "react-redux";
import {
    createMuiTheme,
    responsiveFontSizes,
    ThemeProvider
} from "@material-ui/core/styles";

import {reducer as dictDocCategoryView} from "./Dict/DocCategory/View/reducer";
import {reducer as dictDocTypeView} from "./Dict/DocType/View/reducer";
import {reducer as dictRegionView} from "./Dict/Region/View/reducer";
import {reducer as dictMunicipalView} from "./Dict/Municipal/View/reducer";
import {reducer as dictWorldSkillCategoryView} from "./Dict/WorldSkillCategory/View/reducer";
import {reducer as dictWorldSkillTypeView} from "./Dict/WorldSkillType/View/reducer";
import {reducer as dictWorldSkillStatusView} from "./Dict/WorldSkillStatus/View/reducer";
import {reducer as dictWorldSkillView} from "./Dict/WorldSkill/View/reducer";
import {reducer as dictLegalFormView} from "./Dict/LegalForm/View/reducer";
import {reducer as dictPersonSkillStateView} from "./Dict/PersonSkillState/View/reducer";
import {reducer as personView} from "./Person/View/reducer";
import {reducer as organizationView} from "./Organization/View/reducer";
import {reducer as ui} from "./ui/uiModule"

import {composeWithDevTools} from "redux-devtools-extension";
import facilities from "./Facility/store/reducer";
import specialities from "./Dict/Skills/Speciality/store/reducer";
import skillCounter from './Dict/Skills/DictSkills/reducer';
import skill from './Dict/Skills/Skill/store/reducer';

const rootReducer = combineReducers({
    dictDocCategoryView,
    dictDocTypeView,
    dictRegionView,
    dictMunicipalView,
    dictWorldSkillCategoryView,
    dictWorldSkillTypeView,
    dictWorldSkillStatusView,
    dictWorldSkillView,
    dictLegalFormView,
    dictPersonSkillStateView,
    personView,
    organizationView,
    facilities,
    specialities,
    skillCounter,
    skill,
    ui
});

const middlewares = [thunk];
const devTools =
    process.env.NODE_ENV === "production"
        ? applyMiddleware(...middlewares)
        : composeWithDevTools(applyMiddleware(...middlewares, logger));

const store = createStore(rootReducer, devTools);

const keycloak = new Keycloak({
    url: process.env.REACT_APP_KEYCLOAK_BASE_URI,
    realm: "copp-work",
    clientId: "copp-work-site"
});
const security = {
    keycloak: keycloak,
    profile: {},
    me: null,
    hRefreshInterval: null,
    hasRole: role => keycloak.hasRealmRole(role),
    logout: () => {
        if (security.hRefreshInterval) {
            clearInterval(security.hRefreshInterval);
        }
        document.cookie = "AccessToken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        return keycloak.logout();
    }
};

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            "Montserrat",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
        body1: {
            fontSize: 12
        }
    }
});

keycloak.init({onLoad: "login-required"}).success(() => {
    let cookieValue = keycloak.token;
    let cookieName = "AccessToken";
    let cookieExpire = new Date();
    cookieExpire.setMinutes(cookieExpire.getMinutes() + 5);
    document.cookie =
        cookieName + "=" + cookieValue + ";expires=" + cookieExpire + ";path=/";
    security.hRefreshInterval = setInterval(() => {
        console.log("Refreshing token");
        keycloak
            .updateToken(30)
            .success(refreshed => {
                if (refreshed) {
                    console.log("New access token");
                    let cookieValue = keycloak.token;
                    let cookieName = "AccessToken";
                    let cookieExpire = new Date();
                    cookieExpire.setMinutes(cookieExpire.getMinutes() + 5);
                    document.cookie =
                        cookieName +
                        "=" +
                        cookieValue +
                        ";expires=" +
                        cookieExpire +
                        ";path=/";
                } else {
                    console.log("Access token still valid");
                }
            })
            .error(err => {
                console.error(err);
            });
    }, 60000);

    keycloak.loadUserProfile().success(profile => {
        loadMessages(ruMessages);
        locale("ru-RU");
        security.profile = profile;
        axios.get("/work/api/me")
            .then(response => {
                security.me = response.data;
            }, () => {
                security.me = null;
            })
            .then(() => {
                ReactDOM.render(
                    <ThemeProvider theme={theme}>
                        <Provider store={store}>
                            <SecurityContext.Provider value={security}>
                                <App/>
                            </SecurityContext.Provider>
                        </Provider>
                    </ThemeProvider>,
                    document.getElementById("root")
                );
            })
    });
});
