import {connect} from "react-redux";
import PersonViewRevisionsImpl from "./PersonViewRevisionsImpl";

function getRevisionsData(state) {
    return state.personView.revisionsData || [];
}

const mapStateToProps = state => ({
    revisionsData: getRevisionsData(state)
});

export default connect(
    mapStateToProps
)(PersonViewRevisionsImpl);