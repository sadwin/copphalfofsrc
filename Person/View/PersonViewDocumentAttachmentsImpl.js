import React from "react";
import PersonViewDocumentAttachment from "./PersonViewDocumentAttachment";
import FileUploader from "devextreme-react/file-uploader";
import notify from "devextreme/ui/notify";

class PersonViewDocumentAttachmentsImpl extends React.PureComponent {

    constructor(props) {
        super(props);
        this.allowedExtensions = ['.jpg', '.jpeg', '.gif', '.png', '.tiff', '.pdf', '.odt', '.docx'];
        this.handleDocumentAttachUploadError = this.handleDocumentAttachUploadError.bind(this);
        this.handleDocumentAttachmentUploaded = this.handleDocumentAttachmentUploaded.bind(this);
    }

    handleDocumentAttachmentUploaded() {
        let {loadDocumentAttachments} = this.props;
        loadDocumentAttachments();
    }

    handleDocumentAttachUploadError() {
        notify({
            closeOnClick: true,
            closeOnOutsideClick: true,
            message: 'Ошибка загрузки файла',
        }, 'error')
    }

    render() {
        let {
            id,
            documentAttachments,
            documentAttachmentsVisible
        } = this.props;
        let documentAttachmentUploadUrl = '/work/api/person/' + id + '/main/document/attach';
        let listClass = 'copp-person-view-info-main-attach-list';
        if (!documentAttachmentsVisible) {
            listClass += ' hidden';
        }
        return (
            <React.Fragment>
                <div className={listClass}>
                    {
                        documentAttachments.map(attach => (<PersonViewDocumentAttachment key={attach.id} attach={attach}/>))
                    }
                </div>
                <FileUploader
                    visible={documentAttachmentsVisible}
                    name={'attach'}
                    uploadUrl={documentAttachmentUploadUrl}
                    uploadMethod={'POST'}
                    multiple={true}
                    allowedFileExtensions={this.allowedExtensions}
                    maxFileSize={40000000}
                    uploadMode={'instantly'}
                    onUploadError={this.handleDocumentAttachUploadError}
                    onUploaded={this.handleDocumentAttachmentUploaded}
                />
            </React.Fragment>)
    }

}


export default PersonViewDocumentAttachmentsImpl;