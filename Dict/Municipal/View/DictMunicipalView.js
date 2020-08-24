import {connect} from 'react-redux';
import DictMunicipalViewImpl from "./DictMunicipalViewImpl";
import {loadData} from "./fetch";

const mapStateToProps = state => ({
    isError: state.dictMunicipalView.viewState === -1,
    isForbidden: state.dictMunicipalView.viewState === 403,
    isNotFound: state.dictMunicipalView.viewState === 404
});

const mapDispatchToProps = dispatch => ({
    loadData: id => dispatch(loadData(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictMunicipalViewImpl);