import {connect} from "react-redux";
import PersonViewSkillStatesImpl from "./PersonViewSkillStatesImpl";


const mapStateToProps = state =>  ({
    skillStatesData: state.personView.skillStatesData,
    hasSkillStatesData: state.personView.hasSkillStatesData
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PersonViewSkillStatesImpl)

