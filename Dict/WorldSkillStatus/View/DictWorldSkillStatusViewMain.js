import {connect} from "react-redux";
import DictWorldSkillStatusViewMainImpl from "./DictWorldSkillStatusViewMainImpl";
import {setMainDataProperty} from "./actions";

const mapStateToProps = state => ({
   ...state.dictWorldSkillStatusView.mainData,
});

const mapDispatchToProps = dispatch => ({
    setProperty: (property, value) => dispatch(setMainDataProperty(property, value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictWorldSkillStatusViewMainImpl);