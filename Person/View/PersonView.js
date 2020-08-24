import {connect} from 'react-redux';
import {loadData} from "./fetch";
import PersonViewImpl from "./PersonViewImpl";

function isError(state) {
    return state.personView.viewState === -1;
}

function isForbidden(state) {
    return state.personView.viewState === 403;
}

function isNotFound(state) {
    return state.personView.viewState === 404;
}

const mapStateToProps = state => ({
    isError: isError(state),
    isForbidden : isForbidden(state),
    isNotFound: isNotFound(state)
});

const mapDispatchToProps = dispatch => {
    return {
        loadData: id => dispatch(loadData(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonViewImpl);