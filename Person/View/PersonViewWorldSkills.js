import {connect} from "react-redux";
import PersonViewWorldSkillsImpl from "./PersonViewWorldSkillsImpl";


const mapStateToProps = state =>  ({
    worldSkillsData: state.personView.worldSkillsData,
    hasWorldSkillsData: state.personView.hasWorldSkillsData
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PersonViewWorldSkillsImpl)

