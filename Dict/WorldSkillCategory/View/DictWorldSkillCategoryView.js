import {connect} from 'react-redux';
import DictWorldSkillCategoryViewImpl from "./DictWorldSkillCategoryViewImpl";
import {loadData} from "./fetch";

const mapStateToProps = state => ({
    isError: state.dictWorldSkillCategoryView.viewState === -1,
    isForbidden : state.dictWorldSkillCategoryView.viewState === 403,
    isNotFound:  state.dictWorldSkillCategoryView.viewState === 404
});

const mapDispatchToProps = dispatch => {
    return {
        loadData: id => dispatch(loadData(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictWorldSkillCategoryViewImpl);