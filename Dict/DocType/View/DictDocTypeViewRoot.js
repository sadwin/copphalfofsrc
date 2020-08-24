import {connect} from "react-redux";
import {promptSaveData} from "./send";
import DictDocTypeViewRootImpl from "./DictDocTypeViewRootImpl";

const mapStateToProps = state => ({
    isLoading: state.dictDocTypeView.viewState === 0,
    isDataChanged: state.dictDocTypeView.mainDataChanged,
    hasRevisions: state.dictDocTypeView.hasRevisions
});

const mapDispatchToProps = dispatch => ({
    promptSaveData: cb => dispatch(promptSaveData(cb))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictDocTypeViewRootImpl);