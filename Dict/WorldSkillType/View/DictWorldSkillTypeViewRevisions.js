import {connect} from "react-redux";
import DictWorldSkillTypeViewRevisionsImpl from "./DictWorldSkillTypeViewRevisionsImpl";


const mapStateToProps = state => ({
    revisionsInfo: state.dictWorldSkillTypeView.revisionsInfo || []
});

export default connect(
    mapStateToProps
)(DictWorldSkillTypeViewRevisionsImpl);