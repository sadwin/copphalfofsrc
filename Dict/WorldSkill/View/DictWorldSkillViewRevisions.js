import {connect} from "react-redux";
import DictWorldSkillViewRevisionsImpl from "./DictWorldSkillViewRevisionsImpl";


const mapStateToProps = state => ({
    revisionsInfo: state.dictWorldSkillView.revisionsInfo || []
});

export default connect(
    mapStateToProps
)(DictWorldSkillViewRevisionsImpl);