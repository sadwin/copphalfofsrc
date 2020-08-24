import React from "react";
import ScrollView from "devextreme-react/scroll-view";
import Form, {
    SimpleItem as FormSimpleItem,
    Label as FormLabel
} from "devextreme-react/form";
import TextBox from "devextreme-react/text-box";
import CheckBox from "devextreme-react/check-box";

class DictLegalFormViewMainImpl extends React.PureComponent {

    constructor(props) {
        super(props);

        this.handleSuffixEdit = this.handleSuffixEdit.bind(this);
        this.renderSuffixEdit = this.renderSuffixEdit.bind(this);

        this.handlePrefixEdit = this.handlePrefixEdit.bind(this);
        this.renderPrefixEdit = this.renderPrefixEdit.bind(this);

        this.handleAbbrEdit = this.handleAbbrEdit.bind(this);
        this.renderAbbrEdit = this.renderAbbrEdit.bind(this);

        this.handleNameEdit = this.handleNameEdit.bind(this);
        this.renderNameEdit = this.renderNameEdit.bind(this);

        this.handleEducationEdit = this.handleEducationEdit.bind(this);
        this.renderEducationEdit = this.renderEducationEdit.bind(this);
    }

    handleEducationEdit(e) {
        this.props.setProperty('education', e.value);
    }

    renderEducationEdit() {
        return (
            <CheckBox
                value={this.props.education}
                onValueChanged={this.handleEducationEdit}/>
        );
    }

    handlePrefixEdit(e) {
        this.props.setProperty('prefix', e.value);
    }

    renderPrefixEdit() {
        return (
            <TextBox
                value={this.props.prefix}
                onValueChanged={this.handlePrefixEdit}/>
        );
    }

    handleSuffixEdit(e) {
        this.props.setProperty('suffix', e.value);
    }

    renderSuffixEdit() {
        return (
            <TextBox
                value={this.props.suffix}
                onValueChanged={this.handleSuffixEdit}/>
        );
    }

    handleAbbrEdit(e) {
        this.props.setProperty('abbr', e.value);
    }

    renderAbbrEdit() {
        return (
            <TextBox
                value={this.props.abbr}
                onValueChanged={this.handleAbbrEdit}/>
        );
    }

    handleNameEdit(e) {
        this.props.setProperty('name', e.value);
    }

    renderNameEdit() {
        return (
            <TextBox
                value={this.props.name}
                onValueChanged={this.handleNameEdit}/>
        );
    }


    render() {
        return (
            <ScrollView height={'100%'} width={'100%'}>
                <Form labelLocation={'top'} width={500}>
                    <FormSimpleItem
                        name={'prefix'}
                        render={this.renderPrefixEdit}>
                        <FormLabel text={'Префикс'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'suffix'}
                        render={this.renderSuffixEdit}>
                        <FormLabel text={'Суффикс'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'abbr'}
                        render={this.renderAbbrEdit}>
                        <FormLabel text={'Сокращение'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'name'}
                        render={this.renderNameEdit}>
                        <FormLabel text={'Наименование'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'education'}
                        render={this.renderEducationEdit}>
                        <FormLabel text={'Образовательная деятельность'}/>
                    </FormSimpleItem>
                </Form>
            </ScrollView>
        )
    }
}

export default DictLegalFormViewMainImpl;