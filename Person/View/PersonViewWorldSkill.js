import {connect} from "react-redux"
import PersonViewWorldSkillImpl from "./PersonViewWorldSkillImpl";
import {removeWorldSkill} from "./delete";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    removeWorldSkill: (worldSkillId) => dispatch(removeWorldSkill(worldSkillId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonViewWorldSkillImpl)