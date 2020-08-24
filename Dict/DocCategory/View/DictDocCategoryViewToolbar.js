import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import DictDocCategoryViewToolbarImpl from "./DictDocCategoryViewToolbarImpl";
import {refreshData} from "./fetch";
import {saveData} from "./send";

const mapStateToProps = state => ({
    saveDisabled: !state.dictDocCategoryView.mainDataChanged
});

const mapDispatchToProps = dispatch => ({
    refreshData: () => dispatch(refreshData()),
    saveData: () => dispatch(saveData())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(DictDocCategoryViewToolbarImpl));