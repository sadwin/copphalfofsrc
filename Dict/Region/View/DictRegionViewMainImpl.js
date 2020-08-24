import React from "react";
import ScrollView from "devextreme-react/scroll-view";
import Form, {
    SimpleItem as FormSimpleItem,
    Label as FormLabel
} from "devextreme-react/form";
import TextBox from "devextreme-react/text-box";

class DictRegionViewMainImpl extends React.PureComponent {

    constructor(props) {
        super(props);

        this.handleCodeChanged = this.handleCodeChanged.bind(this);
        this.renderCodeEdit = this.renderCodeEdit.bind(this);

        this.handlePrefixChanged = this.handlePrefixChanged.bind(this);
        this.renderPrefixEdit = this.renderPrefixEdit.bind(this);

        this.handleNameChanged = this.handleNameChanged.bind(this);
        this.renderNameEdit = this.renderNameEdit.bind(this);

        this.handleSuffixChanged = this.handleSuffixChanged.bind(this);
        this.renderSuffixEdit = this.renderSuffixEdit.bind(this);
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


    handleCodeChanged(e) {
        this.props.setProperty('code', e.value);
    }

    renderCodeEdit() {
        return (
            <TextBox
                value={this.props.code}
                onValueChanged={this.handleCodeChanged}/>
        );
    }

    handlePrefixChanged(e) {
        this.props.setProperty('prefix', e.value);
    }

    renderPrefixEdit() {
        return (
            <TextBox
                value={this.props.prefix}
                onValueChanged={this.handlePrefixChanged}/>
        );
    }

    handleSuffixChanged(e) {
        this.props.setProperty('suffix', e.value);
    }

    renderSuffixEdit() {
        return (
            <TextBox
                value={this.props.suffix}
                onValueChanged={this.handleSuffixChanged}/>
        );
    }

    render() {
        return (
            <ScrollView height={'100%'} width={'100%'}>
                <Form labelLocation={'top'} width={500}>
                    <FormSimpleItem
                        name={'code'}
                        render={this.renderCodeEdit}>
                        <FormLabel text={'Код'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'prefix'}
                        render={this.renderPrefixEdit}>
                        <FormLabel text={'Префикс'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'name'}
                        render={this.renderNameEdit}>
                        <FormLabel text={'Название'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'suffix'}
                        render={this.renderSuffixEdit}>
                        <FormLabel text={'Суффикс'}/>
                    </FormSimpleItem>
                </Form>
            </ScrollView>
        )
    }
}

export default DictRegionViewMainImpl;