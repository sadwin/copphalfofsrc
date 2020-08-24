import React from "react";
import ScrollView from "devextreme-react/scroll-view";
import Form, {
    SimpleItem as FormSimpleItem,
    Label as FormLabel
} from "devextreme-react/form";
import TextBox from "devextreme-react/text-box";
import CheckBox from "devextreme-react/check-box";

class DictDocCategoryViewMainImpl extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleNameChanged = this.handleNameChanged.bind(this);
        this.handleSystemChanged = this.handleSystemChanged.bind(this);
        this.renderNameEdit = this.renderNameEdit.bind(this);
        this.renderSystemEdit = this.renderSystemEdit.bind(this);
    }


    handleNameChanged(e) {
        this.props.setProperty('name', e.value);
    }

    renderNameEdit() {
        return (
            <TextBox
                value={this.props.name}
                onValueChanged={this.handleNameChanged}/>
        );
    }


    handleSystemChanged(e) {
        this.props.setProperty('system', e.value);
    }


    renderSystemEdit() {
        return (
            <CheckBox
                value={this.props.system}
                onValueChanged={this.handleSystemChanged}/>
        );
    }

    render() {
        return (
            <ScrollView height={'100%'} width={'100%'}>
                <Form labelLocation={'top'} width={500}>
                    <FormSimpleItem
                        name={'name'}
                        render={this.renderNameEdit}>
                        <FormLabel text={'Название'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'system'}
                        render={this.renderSystemEdit}>
                        <FormLabel text={'Системная'}/>
                    </FormSimpleItem>
                </Form>
            </ScrollView>
        )
    }
}

export default DictDocCategoryViewMainImpl;