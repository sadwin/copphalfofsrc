import {connect} from 'react-redux';
import DictWorldSkillTypeViewImpl from "./DictWorldSkillTypeViewImpl";
import {loadData} from "./fetch";

const mapStateToProps = state => ({
    isError: state.dictWorldSkillTypeView.viewState === -1,
    isForbidden: state.dictWorldSkillTypeView.viewState === 403,
    isNotFound: state.dictWorldSkillTypeView.viewState === 404
});

const mapDispatchToProps = dispatch => ({
    loadData: id => dispatch(loadData(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictWorldSkillTypeViewImpl);