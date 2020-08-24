import {connect} from 'react-redux';
import DictPersonSkillStateViewImpl from "./DictPersonSkillStateViewImpl";
import {loadData} from "./fetch";

const mapStateToProps = state => ({
    isError: state.dictPersonSkillStateView.viewState === -1,
    isForbidden : state.dictPersonSkillStateView.viewState === 403,
    isNotFound:  state.dictPersonSkillStateView.viewState === 404
});

const mapDispatchToProps = dispatch => {
    return {
        loadData: id => dispatch(loadData(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictPersonSkillStateViewImpl);