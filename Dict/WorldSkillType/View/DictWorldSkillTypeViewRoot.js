import {connect} from "react-redux";
import {promptSaveData} from "./send";
import DictWorldSkillTypeViewRootImpl from "./DictWorldSkillTypeViewRootImpl";

const mapStateToProps = state => ({
    isLoading: state.dictWorldSkillTypeView.viewState === 0,
    isDataChanged: state.dictWorldSkillTypeView.mainDataChanged,
    hasRevisions: state.dictWorldSkillTypeView.hasRevisions
});

const mapDispatchToProps = dispatch => ({
    promptSaveData: cb => dispatch(promptSaveData(cb))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictWorldSkillTypeViewRootImpl);