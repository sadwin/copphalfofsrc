import {connect} from "react-redux";
import DictMunicipalViewRevisionsImpl from "./DictMunicipalViewRevisionsImpl";

const mapStateToProps = state => ({
    revisionsInfo: state.dictMunicipalView.revisionsInfo || []
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictMunicipalViewRevisionsImpl);