import {connect} from "react-redux";
import {promptSaveData} from "./send";
import DictPersonSkillStateViewRootImpl from "./DictPersonSkillStateViewRootImpl";

const mapStateToProps = state => ({
    isLoading: state.dictPersonSkillStateView.viewState === 0,
    isDataChanged: state.dictPersonSkillStateView.mainDataChanged,
    hasRevisions: state.dictPersonSkillStateView.hasRevisions
});

const mapDispatchToProps = dispatch => ({
    promptSaveData: cb => dispatch(promptSaveData(cb))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictPersonSkillStateViewRootImpl);