import {connect} from "react-redux";
import {removeDocumentAttachment} from "./delete";
import PersonViewDocumentAttachmentImpl from "./PersonViewDocumentAttachmentImpl";


const mapStateToProps = state => ({
    id: state.personView.id,
});

const mapDispatchToProps = dispatch => ({
    removeDocumentAttachment: (fileId) => dispatch(removeDocumentAttachment(fileId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonViewDocumentAttachmentImpl);