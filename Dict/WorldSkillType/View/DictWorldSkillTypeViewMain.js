import {connect} from "react-redux";
import DictWorldSkillTypeViewMainImpl from "./DictWorldSkillTypeViewMainImpl";
import {setMainDataProperty} from "./actions";

const mapStateToProps = state => ({
    ...state.dictWorldSkillTypeView.mainData,
});

const mapDispatchToProps = dispatch => ({
    setProperty: (property, value) => dispatch(setMainDataProperty(property, value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictWorldSkillTypeViewMainImpl);