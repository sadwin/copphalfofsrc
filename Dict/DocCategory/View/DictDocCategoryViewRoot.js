import {connect} from "react-redux";
import {promptSaveData} from "./send";
import DictDocCategoryViewRootImpl from "./DictDocCategoryViewRootImpl";

const mapStateToProps = state => ({
    isLoading: state.dictDocCategoryView.viewState === 0,
    isDataChanged: state.dictDocCategoryView.mainDataChanged,
    hasRevisions: state.dictDocCategoryView.hasRevisions
});

const mapDispatchToProps = dispatch => ({
    promptSaveData: cb => dispatch(promptSaveData(cb))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictDocCategoryViewRootImpl);