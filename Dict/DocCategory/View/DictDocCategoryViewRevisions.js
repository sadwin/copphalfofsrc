import {connect} from "react-redux";
import DictDocCategoryViewRevisionsImpl from "./DictDocCategoryViewRevisionsImpl";

const mapStateToProps = state => ({
    revisionsInfo: state.dictDocCategoryView.revisionsInfo || []
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictDocCategoryViewRevisionsImpl);