import React from "react";
import ScrollView from "devextreme-react/scroll-view";
import Form, {
    SimpleItem as FormSimpleItem,
    Label as FormLabel
} from "devextreme-react/form";
import TextBox from "devextreme-react/text-box";
import CheckBox from "devextreme-react/check-box";
import SelectBox from "devextreme-react/select-box";

class DictDocTypeViewMainImpl extends React.PureComponent {

    constructor(props) {
        super(props);

        this.handleCategoryChanged = this.handleCategoryChanged.bind(this);
        this.renderCategoryEdit = this.renderCategoryEdit.bind(this);

        this.handleNameChanged = this.handleNameChanged.bind(this);
        this.renderNameEdit = this.renderNameEdit.bind(this);

        this.handleSystemChanged = this.handleSystemChanged.bind(this);
        this.renderSystemEdit = this.renderSystemEdit.bind(this);
    }


    handleCategoryChanged(e) {
        this.props.setProperty('category', e.value);
    }

    renderCategoryEdit() {
        return (
            <SelectBox
                displayExpr={'name'}
                valueExpr={'id'}
                showClearButton={true}
                searchEnabled={true}
                searchExpr={'name'}
                items={this.props.categories}
                value={this.props.category}
                onValueChanged={this.handleCategoryChanged}/>
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
                        <FormLabel text={'Наименование'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'category'}
                        render={this.renderCategoryEdit}>
                        <FormLabel text={'Категория'}/>
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

export default DictDocTypeViewMainImpl;