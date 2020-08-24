import {connect} from 'react-redux';
import DictDocCategoryViewImpl from "./DictDocCategoryViewImpl";
import {loadData} from "./fetch";

const mapStateToProps = state => ({
    isError: state.dictDocCategoryView.viewState === -1,
    isForbidden: state.dictDocCategoryView.viewState === 403,
    isNotFound: state.dictDocCategoryView.viewState === 404
});

const mapDispatchToProps = dispatch => ({
    loadData: id => dispatch(loadData(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictDocCategoryViewImpl);