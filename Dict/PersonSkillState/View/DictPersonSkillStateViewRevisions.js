import {connect} from "react-redux";
import DictPersonSkillStateViewRevisionsImpl from "./DictPersonSkillStateViewRevisionsImpl";


const mapStateToProps = state => ({
    revisionsInfo: state.dictPersonSkillStateView.revisionsInfo || []
});

export default connect(
    mapStateToProps
)(DictPersonSkillStateViewRevisionsImpl);