import React from "react";
import ScrollView from "devextreme-react/scroll-view";
import Form, {
    SimpleItem as FormSimpleItem,
    Label as FormLabel
} from "devextreme-react/form";
import TextBox from "devextreme-react/text-box";

class DictPersonSkillStateViewMainImpl extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleNameChanged = this.handleNameChanged.bind(this);
        this.renderNameEdit = this.renderNameEdit.bind(this);
    }

    handleNameChanged(e) {
        this.props.setProperty('name', e.value);
    }

    renderNameEdit() {
        return (
            <TextBox
                value={this.props.name}
                onValueChanged={this.handleNameChanged}
                maxLength={50}/>
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
                </Form>
            </ScrollView>
        )
    }
}

export default DictPersonSkillStateViewMainImpl;