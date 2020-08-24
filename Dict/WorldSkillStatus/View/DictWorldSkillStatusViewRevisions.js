import {connect} from "react-redux";
import DictWorldSkillStatusViewRevisionsImpl from "./DictWorldSkillStatusViewRevisionsImpl";


const mapStateToProps = state => ({
    revisionsInfo: state.dictWorldSkillStatusView.revisionsInfo || []
});

export default connect(
    mapStateToProps
)(DictWorldSkillStatusViewRevisionsImpl);