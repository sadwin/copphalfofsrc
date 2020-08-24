import {connect} from "react-redux";
import DictRegionViewRevisionsImpl from "./DictRegionViewRevisionsImpl";

const mapStateToProps = state => ({
    revisionsInfo: state.dictRegionView.revisionsInfo || []
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictRegionViewRevisionsImpl);