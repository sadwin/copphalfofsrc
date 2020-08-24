import {connect} from 'react-redux';
import DictRegionViewImpl from "./DictRegionViewImpl";
import {loadData} from "./fetch";

const mapStateToProps = state => ({
    isError: state.dictRegionView.viewState === -1,
    isForbidden: state.dictRegionView.viewState === 403,
    isNotFound: state.dictRegionView.viewState === 404
});

const mapDispatchToProps = dispatch => ({
    loadData: id => dispatch(loadData(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictRegionViewImpl);