import {connect} from 'react-redux';
import DictWorldSkillStatusViewImpl from "./DictWorldSkillStatusViewImpl";
import {loadData} from "./fetch";

const mapStateToProps = state => ({
    isError: state.dictWorldSkillStatusView.viewState === -1,
    isForbidden : state.dictWorldSkillStatusView.viewState === 403,
    isNotFound:  state.dictWorldSkillStatusView.viewState === 404
});

const mapDispatchToProps = dispatch => {
    return {
        loadData: id => dispatch(loadData(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictWorldSkillStatusViewImpl);