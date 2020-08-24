import {connect} from "react-redux";
import DictDocTypeViewRevisionsImpl from "./DictDocTypeViewRevisionsImpl";

const mapStateToProps = state => ({
    revisionsInfo: state.dictDocTypeView.revisionsInfo || []
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictDocTypeViewRevisionsImpl);