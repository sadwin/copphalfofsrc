import {connect} from "react-redux";
import PersonViewDocumentAttachmentsImpl from "./PersonViewDocumentAttachmentsImpl";
import {loadDocumentAttachments} from "./fetch";



const mapStateToProps = state => ({
    documentAttachments: state.personView.documentAttachments,
    documentAttachmentsVisible: state.personView.documentAttachmentsVisible,
    id: state.personView.id,
});

const mapDispatchToProps = dispatch => ({
    loadDocumentAttachments: () => dispatch(loadDocumentAttachments())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonViewDocumentAttachmentsImpl);