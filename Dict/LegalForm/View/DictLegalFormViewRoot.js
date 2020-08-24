import {connect} from "react-redux";
import {promptSaveData} from "./send";
import DictLegalFormViewRootImpl from "./DictLegalFormViewRootImpl";


const mapStateToProps = state => ({
    isLoading: state.dictLegalFormView.viewState === 0,
    isDataChanged: state.dictLegalFormView.mainDataChanged,
    hasRevisions: state.dictLegalFormView.hasRevisions
});

const mapDispatchToProps = dispatch => ({
    promptSaveData: cb => dispatch(promptSaveData(cb))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictLegalFormViewRootImpl);