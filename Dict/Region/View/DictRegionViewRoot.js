import {connect} from "react-redux";
import {promptSaveData} from "./send";
import DictRegionViewRootImpl from "./DictRegionViewRootImpl";

const mapStateToProps = state => ({
    isLoading: state.dictRegionView.viewState === 0,
    isDataChanged: state.dictRegionView.mainDataChanged,
    hasRevisions: state.dictRegionView.hasRevisions
});

const mapDispatchToProps = dispatch => ({
    promptSaveData: cb => dispatch(promptSaveData(cb))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictRegionViewRootImpl);