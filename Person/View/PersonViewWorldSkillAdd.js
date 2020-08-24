import {connect} from "react-redux"
import PersonViewWorldSkillAddImpl from "./PersonViewWorldSkillAddImpl";
import {addWorldSkill} from "./send";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    addWorldSkill: (worldSkillId) => dispatch(addWorldSkill(worldSkillId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonViewWorldSkillAddImpl);