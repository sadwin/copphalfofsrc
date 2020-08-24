import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {refreshData} from "./fetch";
import {saveData} from "./send";
import PersonViewToolbarImpl from "./PersonViewToolbarImpl";

function saveDisabled(state) {
    return !state.personView.mainDataChanged;
}

const mapStateToProps = state => ({
    saveDisabled: saveDisabled(state)
});

const mapDispatchToProps = dispatch => {
    return {
        refreshData: () => dispatch(refreshData()),
        saveData: () => dispatch(saveData())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(PersonViewToolbarImpl));