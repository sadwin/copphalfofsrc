import {connect} from "react-redux";
import DictRegionViewMainImpl from "./DictRegionViewMainImpl";
import {setMainDataProperty} from "./actions";


const mapStateToProps = state => ({
    ...state.dictRegionView.mainData
});

const mapDispatchToProps = dispatch => ({
    setProperty: (property, value) => dispatch(setMainDataProperty(property, value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictRegionViewMainImpl);