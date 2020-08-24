import {connect} from 'react-redux';
import DictLegalFormViewImpl from "./DictLegalFormViewImpl";
import {loadData} from "./fetch";

const mapStateToProps = state => ({
    isError: state.dictLegalFormView.viewState === -1,
    isForbidden: state.dictLegalFormView.viewState === 403,
    isNotFound: state.dictLegalFormView.viewState === 404
});

const mapDispatchToProps = dispatch => ({
    loadData: id => dispatch(loadData(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictLegalFormViewImpl);