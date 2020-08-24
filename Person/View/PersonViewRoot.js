import { connect } from "react-redux";
import { promptSaveData } from "./send";
import PersonViewRootImpl from "./PersonViewRootImpl";
import {loadData} from "./fetch"

function isLoading(state) {
    return state.personView.viewState === 0;
}

function isDataChanged(state) {
    return state.personView.mainDataChanged;
}

function hasRevisionsData(state) {
    return state.personView.hasRevisionsData;
}

function mainData(state) {
    return state.personView.mainData;
}

function id(state) {
    return state.personView.id;
}

const mapStateToProps = state => ({
    id: id(state),
    isLoading: isLoading(state),
    isDataChanged: isDataChanged(state),
    hasRevisionsData: hasRevisionsData(state),
    mainData: mainData(state),
});

const mapDispatchToProps = {
    promptSaveData,
    loadData
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonViewRootImpl);
