import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import DictDocTypeViewToolbarImpl from "./DictDocTypeViewToolbarImpl";
import {refreshData} from "./fetch";
import {saveData} from "./send";

const mapStateToProps = state => ({
    saveDisabled: !state.dictDocTypeView.mainDataChanged
});

const mapDispatchToProps = dispatch => ({
    refreshData: () => dispatch(refreshData()),
    saveData: () => dispatch(saveData())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(DictDocTypeViewToolbarImpl));