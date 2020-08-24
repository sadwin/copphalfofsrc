import {connect} from "react-redux";
import DictMunicipalViewMainImpl from "./DictMunicipalViewMainImpl";
import {setMainDataProperty} from "./actions";


const mapStateToProps = state => ({
    ...state.dictMunicipalView.mainData,
    ...state.dictMunicipalView.mainDict,
});

const mapDispatchToProps = dispatch => ({
    setProperty: (property, value) => dispatch(setMainDataProperty(property, value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictMunicipalViewMainImpl);