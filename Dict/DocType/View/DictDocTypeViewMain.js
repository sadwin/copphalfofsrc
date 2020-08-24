import {connect} from "react-redux";
import DictDocTypeViewMainImpl from "./DictDocTypeViewMainImpl";
import {setMainDataProperty} from "./actions";


const mapStateToProps = state => ({
    ...state.dictDocTypeView.mainData,
    ...state.dictDocTypeView.mainDict,
});

const mapDispatchToProps = dispatch => ({
    setProperty: (property, value) => dispatch(setMainDataProperty(property, value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictDocTypeViewMainImpl);