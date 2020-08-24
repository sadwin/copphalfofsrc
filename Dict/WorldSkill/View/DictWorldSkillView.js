import {connect} from 'react-redux';
import DictWorldSkillViewImpl from "./DictWorldSkillViewImpl";
import {loadData} from "./fetch";

const mapStateToProps = state => ({
    isError: state.dictWorldSkillView.viewState === -1,
    isForbidden: state.dictWorldSkillView.viewState === 403,
    isNotFound: state.dictWorldSkillView.viewState === 404
});

const mapDispatchToProps = dispatch => ({
    loadData: id => dispatch(loadData(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictWorldSkillViewImpl);