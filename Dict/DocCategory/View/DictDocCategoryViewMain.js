import {connect} from "react-redux";
import DictDocCategoryViewMainImpl from "./DictDocCategoryViewMainImpl";
import {setMainDataProperty} from "./actions";


const mapStateToProps = state => ({
    ...state.dictDocCategoryView.mainData
});

const mapDispatchToProps = dispatch => ({
    setProperty: (property, value) => dispatch(setMainDataProperty(property, value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictDocCategoryViewMainImpl);