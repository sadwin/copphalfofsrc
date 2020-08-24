import {connect} from "react-redux";
import DictWorldSkillCategoryViewRevisionsImpl from "./DictWorldSkillCategoryViewRevisionsImpl";


const mapStateToProps = state => ({
    revisionsInfo: state.dictWorldSkillCategoryView.revisionsInfo || []
});

export default connect(
    mapStateToProps
)(DictWorldSkillCategoryViewRevisionsImpl);