import {connect} from "react-redux";
import DictWorldSkillCategoryViewMainImpl from "./DictWorldSkillCategoryViewMainImpl";
import {setMainDataProperty} from "./actions";

const mapStateToProps = state => ({
   ...state.dictWorldSkillCategoryView.mainData,
});

const mapDispatchToProps = dispatch => ({
    setProperty: (property, value) => dispatch(setMainDataProperty(property, value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictWorldSkillCategoryViewMainImpl);