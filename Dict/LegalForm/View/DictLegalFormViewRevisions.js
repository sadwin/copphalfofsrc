import {connect} from "react-redux";
import DictLegalFormViewRevisionsImpl from "./DictLegalFormViewRevisionsImpl";

const mapStateToProps = state => ({
    revisionsInfo: state.dictLegalFormView.revisionsInfo || []
});

export default connect(
    mapStateToProps
)(DictLegalFormViewRevisionsImpl);