import {connect} from "react-redux";
import DictLegalFormViewMainImpl from "./DictLegalFormViewMainImpl";
import {setMainDataProperty} from "./actions";


const mapStateToProps = state => ({
    ...state.dictLegalFormView.mainData,
});

const mapDispatchToProps = dispatch => ({
    setProperty: (property, value) => dispatch(setMainDataProperty(property, value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictLegalFormViewMainImpl);