import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import DictLegalFormViewToolbarImpl from "./DictLegalFormViewToolbarImpl";
import {refreshData} from "./fetch";
import {saveData} from "./send";

const mapStateToProps = state => ({
    saveDisabled: !state.dictLegalFormView.mainDataChanged
});

const mapDispatchToProps = dispatch => ({
    refreshData: () => dispatch(refreshData()),
    saveData: () => dispatch(saveData())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(DictLegalFormViewToolbarImpl));