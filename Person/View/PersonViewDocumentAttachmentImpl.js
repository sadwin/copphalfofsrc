import React from "react";
import Popup from "devextreme-react/popup";
import Button from "devextreme-react/button";
import FileInfo from "../../util/FileInfo";

class PersonViewDocumentAttachmentImpl extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            deleting: false
        };

        this.handleDocumentAttachDelete = this.handleDocumentAttachDelete.bind(this);
        this.handleDocumentAttachConfirmDelete= this.handleDocumentAttachConfirmDelete.bind(this);
        this.handleDocumentAttachCancelDelete = this.handleDocumentAttachCancelDelete.bind(this);

        this.menuItems = [
            {
                text: 'Удалить',
                icon: 'trash',
                onClick: this.handleDocumentAttachDelete
            }
        ]
    }

    handleDocumentAttachDelete() {
        this.setState({
            deleting: true
        })
    }

    handleDocumentAttachCancelDelete() {
        this.setState({
            deleting: false
        })
    }

    handleDocumentAttachConfirmDelete() {
        let {removeDocumentAttachment, attach} = this.props;
        this.setState({
            deleting: false
        });
        removeDocumentAttachment(attach.id);
    }

    render() {
        let {attach} = this.props;
        let {deleting} = this.state;
        let link = '/work/api/file/' + attach.id;
        return (
            <React.Fragment>
                <FileInfo key={attach.id}
                          link={link}
                          mimeType={attach.mimeType}
                          fileName={attach.fileName}
                          items={this.menuItems}/>
                <Popup
                    visible={deleting}
                    dragEnabled={false}
                    showTitle={true}
                    title={'Подтверждение операции'}
                    width={300}
                    height={'auto'}
                    showCloseButton={false}>
                    <p>Вы действительно хотит удалить вложение `{attach.fileName}`?</p>
                    <Button type="danger" stylingMode="contained" text={'Да'}
                            onClick={this.handleDocumentAttachConfirmDelete}/>
                    <Button type="normal" stylingMode="contained" text={'Нет'}
                            onClick={this.handleDocumentAttachCancelDelete}/>
                </Popup>
            </React.Fragment>
        );
    }
}

export default PersonViewDocumentAttachmentImpl;