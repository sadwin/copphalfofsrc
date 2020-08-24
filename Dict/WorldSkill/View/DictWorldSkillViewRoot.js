import {connect} from "react-redux";
import {promptSaveData} from "./send";
import DictWorldSkillViewRootImpl from "./DictWorldSkillViewRootImpl";

const mapStateToProps = state => ({
    isLoading: state.dictWorldSkillView.viewState === 0,
    isDataChanged: state.dictWorldSkillView.mainDataChanged,
    hasRevisions: state.dictWorldSkillView.hasRevisions
});

const mapDispatchToProps = dispatch => ({
    promptSaveData: cb => dispatch(promptSaveData(cb))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictWorldSkillViewRootImpl);