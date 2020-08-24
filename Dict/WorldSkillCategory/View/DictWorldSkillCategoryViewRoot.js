import {connect} from "react-redux";
import {promptSaveData} from "./send";
import DictWorldSkillCategoryViewRootImpl from "./DictWorldSkillCategoryViewRootImpl";

const mapStateToProps = state => ({
    isLoading: state.dictWorldSkillCategoryView.viewState === 0,
    isDataChanged: state.dictWorldSkillCategoryView.mainDataChanged,
    hasRevisions: state.dictWorldSkillCategoryView.hasRevisions
});

const mapDispatchToProps = dispatch => ({
    promptSaveData: cb => dispatch(promptSaveData(cb))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictWorldSkillCategoryViewRootImpl);