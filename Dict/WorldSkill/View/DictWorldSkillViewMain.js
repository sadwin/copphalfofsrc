import {connect} from "react-redux";
import DictWorldSkillViewMainImpl from "./DictWorldSkillViewMainImpl";
import {setMainDataProperty} from "./actions";

const mapStateToProps = state => ({
    ...state.dictWorldSkillView.mainData,
    ...state.dictWorldSkillView.mainDict,
});

const mapDispatchToProps = dispatch => ({
    setProperty: (property, value) => dispatch(setMainDataProperty(property, value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictWorldSkillViewMainImpl);