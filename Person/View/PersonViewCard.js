import { connect } from "react-redux";
import PersonViewCardImpl from "./PersonViewCardImpl";
import { loadPersonCard } from "./fetch";

const mapStateToProps = state => ({
    data: state.personView.cardData
});

const mapDispatchToProps = {
    loadPersonCard
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonViewCardImpl);
