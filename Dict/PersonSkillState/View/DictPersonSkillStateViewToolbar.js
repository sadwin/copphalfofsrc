import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import DictPersonSkillStateViewToolbarImpl from "./DictPersonSkillStateViewToolbarImpl";
import {refreshData} from "./fetch";
import {saveData} from "./send";

const mapStateToProps = state => ({
    saveDisabled: !state.dictPersonSkillStateView.mainDataChanged
});

const mapDispatchToProps = dispatch => ({
    refreshData: () => dispatch(refreshData()),
    saveData: () => dispatch(saveData())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(DictPersonSkillStateViewToolbarImpl));