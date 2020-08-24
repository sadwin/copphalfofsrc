import {connect} from 'react-redux';
import DictDocTypeViewImpl from "./DictDocTypeViewImpl";
import {loadData} from "./fetch";

const mapStateToProps = state => ({
    isError: state.dictDocTypeView.viewState === -1,
    isForbidden: state.dictDocTypeView.viewState === 403,
    isNotFound: state.dictDocTypeView.viewState === 404
});

const mapDispatchToProps = dispatch => ({
    loadData: id => dispatch(loadData(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictDocTypeViewImpl);