import {connect} from "react-redux";
import {promptSaveData} from "./send";
import DictMunicipalViewRootImpl from "./DictMunicipalViewRootImpl";

const mapStateToProps = state => ({
    isLoading: state.dictMunicipalView.viewState === 0,
    isDataChanged: state.dictMunicipalView.mainDataChanged,
    hasRevisions: state.dictMunicipalView.hasRevisions
});

const mapDispatchToProps = dispatch => ({
    promptSaveData: cb => dispatch(promptSaveData(cb))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictMunicipalViewRootImpl);