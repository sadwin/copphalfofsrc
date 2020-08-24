import {connect} from "react-redux";
import {promptSaveData} from "./send";
import DictWorldSkillStatusViewRootImpl from "./DictWorldSkillStatusViewRootImpl";

const mapStateToProps = state => ({
    isLoading: state.dictWorldSkillStatusView.viewState === 0,
    isDataChanged: state.dictWorldSkillStatusView.mainDataChanged,
    hasRevisions: state.dictWorldSkillStatusView.hasRevisions
});

const mapDispatchToProps = dispatch => ({
    promptSaveData: cb => dispatch(promptSaveData(cb))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictWorldSkillStatusViewRootImpl);