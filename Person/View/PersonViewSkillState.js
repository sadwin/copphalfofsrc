import {connect} from "react-redux"
import PersonViewSkillStateImpl from "./PersonViewSkillStateImpl";
import {removeSkillState} from "./delete";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    removeSkillState: (skillStateId) => dispatch(removeSkillState(skillStateId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonViewSkillStateImpl)