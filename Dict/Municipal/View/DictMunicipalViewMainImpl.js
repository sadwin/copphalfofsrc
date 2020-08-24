import React from "react";
import ScrollView from "devextreme-react/scroll-view";
import Form, {
    SimpleItem as FormSimpleItem,
    Label as FormLabel
} from "devextreme-react/form";
import TextBox from "devextreme-react/text-box";
import NumberBox from "devextreme-react/number-box";
import SelectBox from "devextreme-react/select-box";

class DictMunicipalViewMainImpl extends React.PureComponent {

    constructor(props) {
        super(props);

        this.handleRegionChanged = this.handleRegionChanged.bind(this);
        this.renderRegionEdit = this.renderRegionEdit.bind(this);

        this.handleCodeChanged = this.handleCodeChanged.bind(this);
        this.renderCodeEdit = this.renderCodeEdit.bind(this);

        this.handlePrefixChanged = this.handlePrefixChanged.bind(this);
        this.renderPrefixEdit = this.renderPrefixEdit.bind(this);

        this.handleNameChanged = this.handleNameChanged.bind(this);
        this.renderNameEdit = this.renderNameEdit.bind(this);

        this.handleSuffixChanged = this.handleSuffixChanged.bind(this);
        this.renderSuffixEdit = this.renderSuffixEdit.bind(this);

        this.handleLevelChanged = this.handleLevelChanged.bind(this);
        this.renderLevelEdit = this.renderLevelEdit.bind(this);
    }


    handleRegionChanged(e) {
        this.props.setProperty('region', e.value);
    }

    renderRegionEdit() {
        return (
            <SelectBox
                displayExpr={'name'}
                valueExpr={'id'}
                showClearButton={true}
                searchEnabled={true}
                searchExpr={'name'}
                items={this.props.regions}
                value={this.props.region}
                onValueChanged={this.handleRegionChanged}/>
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

    handleLevelChanged(e) {
        this.props.setProperty('level', e.value);
    }

    renderLevelEdit() {
        return (
            <NumberBox
                format={'0'}
                value={this.props.level}
                onValueChanged={this.handleLevelChanged}/>
        );
    }

    render() {
        return (
            <ScrollView height={'100%'} width={'100%'}>
                <Form labelLocation={'top'} width={500}>
                    <FormSimpleItem
                        name={'region'}
                        render={this.renderRegionEdit}>
                        <FormLabel text={'Регион'}/>
                    </FormSimpleItem>
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
                        <FormLabel text={'Наименование'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'suffix'}
                        render={this.renderSuffixEdit}>
                        <FormLabel text={'Суффикс'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'level'}
                        render={this.renderLevelEdit}>
                        <FormLabel text={'Порядок'}/>
                    </FormSimpleItem>
                </Form>
            </ScrollView>
        )
    }
}

export default DictMunicipalViewMainImpl;