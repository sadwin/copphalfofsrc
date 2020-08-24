import {connect} from "react-redux"
import PersonViewSkillStateAddImpl from "./PersonViewSkillStateAddImpl";
import {addSkillState} from "./send";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    addSkillState: (skillStateId) => dispatch(addSkillState(skillStateId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonViewSkillStateAddImpl);