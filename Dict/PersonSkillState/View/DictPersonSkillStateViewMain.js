import {connect} from "react-redux";
import DictPersonSkillStateViewMainImpl from "./DictPersonSkillStateViewMainImpl";
import {setMainDataProperty} from "./actions";

const mapStateToProps = state => ({
   ...state.dictPersonSkillStateView.mainData,
});

const mapDispatchToProps = dispatch => ({
    setProperty: (property, value) => dispatch(setMainDataProperty(property, value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictPersonSkillStateViewMainImpl);