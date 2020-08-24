import React from "react";
import ScrollView from "devextreme-react/scroll-view";
import Form, {
    SimpleItem as FormSimpleItem,
    Label as FormLabel
} from "devextreme-react/form";
import TextBox from "devextreme-react/text-box";
import CheckBox from "devextreme-react/check-box";
import DateBox from "devextreme-react/date-box";
import SelectBox from "devextreme-react/select-box";

class DictWorldSkillViewMainImpl extends React.PureComponent {

    constructor(props) {
        super(props);

        this.handleCisChanged = this.handleCisChanged.bind(this);
        this.renderCisEdit = this.renderCisEdit.bind(this);
        this.handleCategoryChanged = this.handleCategoryChanged.bind(this);
        this.renderCategoryEdit = this.renderCategoryEdit.bind(this);
        this.handleTypeChanged = this.handleTypeChanged.bind(this);
        this.renderTypeEdit = this.renderTypeEdit.bind(this);
        this.handleStatusChanged = this.handleStatusChanged.bind(this);
        this.renderStatusEdit = this.renderStatusEdit.bind(this);
        this.handleFutureChanged = this.handleFutureChanged.bind(this);
        this.renderFutureEdit = this.renderFutureEdit.bind(this);
        this.handleJuniorChanged = this.handleJuniorChanged.bind(this);
        this.renderJuniorEdit = this.renderJuniorEdit.bind(this);
        this.handleMasterChanged = this.handleMasterChanged.bind(this);
        this.renderMasterEdit = this.renderMasterEdit.bind(this);
        this.handleNameChanged = this.handleNameChanged.bind(this);
        this.renderNameEdit = this.renderNameEdit.bind(this);
        this.handleNameEngChanged = this.handleNameEngChanged.bind(this);
        this.renderNameEngEdit = this.renderNameEngEdit.bind(this);
        this.handleStartDateChanged = this.handleStartDateChanged.bind(this);
        this.renderStartDateEdit = this.renderStartDateEdit.bind(this);
        this.handleEndDateChanged = this.handleEndDateChanged.bind(this);
        this.renderEndDateEdit = this.renderEndDateEdit.bind(this);
    }

    handleEndDateChanged(e) {
        this.props.setProperty('endDate', e.value);
    }

    renderEndDateEdit() {
        return (
            <DateBox
                value={this.props.endDate}
                onValueChanged={this.handleEndDateChanged}/>
        );
    }

    handleStartDateChanged(e) {
        this.props.setProperty('startDate', e.value);
    }

    renderStartDateEdit() {
        return (
            <DateBox
                value={this.props.startDate}
                onValueChanged={this.handleStartDateChanged}/>
        );
    }


    handleNameEngChanged(e) {
        this.props.setProperty('nameEng', e.value);
    }

    renderNameEngEdit() {
        return (
            <TextBox
                value={this.props.nameEng}
                onValueChanged={this.handleNameEngChanged}
                maxLength={150}/>
        );
    }

    handleNameChanged(e) {
        this.props.setProperty('name', e.value);
    }

    renderNameEdit() {
        return (
            <TextBox
                value={this.props.name}
                onValueChanged={this.handleNameChanged}
                maxLength={150}/>
        );
    }

    handleMasterChanged(e) {
        this.props.setProperty('master', e.value);
    }

    renderMasterEdit() {
        return (
            <CheckBox
                value={this.props.master}
                onValueChanged={this.handleMasterChanged}/>
        );
    }

    handleJuniorChanged(e) {
        this.props.setProperty('junior', e.value);
    }

    renderJuniorEdit() {
        return (
            <CheckBox
                value={this.props.junior}
                onValueChanged={this.handleJuniorChanged}/>
        );
    }

    handleFutureChanged(e) {
        this.props.setProperty('future', e.value);
    }

    renderFutureEdit() {
        return (
            <CheckBox
                value={this.props.future}
                onValueChanged={this.handleFutureChanged}/>
        );
    }

    handleStatusChanged(e) {
        this.props.setProperty('status', e.value);
    }

    renderStatusEdit() {
        return (
            <SelectBox
                items={this.props.statuses}
                value={this.props.status}
                displayExpr={'name'}
                valueExpr={'id'}
                showClearButton={true}
                searchEnabled={true}
                searchExpr={'name'}
                onValueChanged={this.handleStatusChanged}/>
        );
    }

    handleTypeChanged(e) {
        this.props.setProperty('type', e.value);
    }

    renderTypeEdit() {
        return (
            <SelectBox
                items={this.props.types}
                value={this.props.type}
                displayExpr={'name'}
                valueExpr={'id'}
                showClearButton={true}
                searchEnabled={true}
                searchExpr={'name'}
                onValueChanged={this.handleTypeChanged}/>
        );
    }

    handleCategoryChanged(e) {
        this.props.setProperty('category', e.value);
    }

    renderCategoryEdit() {
        return (
            <SelectBox
                items={this.props.categories}
                value={this.props.category}
                displayExpr={'name'}
                valueExpr={'id'}
                showClearButton={true}
                searchEnabled={true}
                searchExpr={'name'}
                onValueChanged={this.handleCategoryChanged}/>
        );
    }

    handleCisChanged(e) {
        this.props.setProperty('cis', e.value);
    }

    renderCisEdit() {
        return (
            <TextBox
                value={this.props.cis}
                onValueChanged={this.handleCisChanged}
                maxLength={10}/>
        );
    }

    render() {
        return (
            <ScrollView height={'100%'} width={'100%'}>
                <Form labelLocation={'top'} width={500}>
                    <FormSimpleItem
                        name={'cis'}
                        render={this.renderCisEdit}>
                        <FormLabel text={'№ CIS'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'category'}
                        render={this.renderCategoryEdit}>
                        <FormLabel text={'Блок компетенций'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'type'}
                        render={this.renderTypeEdit}>
                        <FormLabel text={'Тип'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'status'}
                        render={this.renderStatusEdit}>
                        <FormLabel text={'Статус компетенции'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'future'}
                        render={this.renderFutureEdit}>
                        <FormLabel text={'Future Skills'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'junior'}
                        render={this.renderJuniorEdit}>
                        <FormLabel text={'Юниоры'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'master'}
                        render={this.renderMasterEdit}>
                        <FormLabel text={'50+'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'name'}
                        render={this.renderNameEdit}>
                        <FormLabel text={'Наименование'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'nameEng'}
                        render={this.renderNameEngEdit}>
                        <FormLabel text={'Name of competence'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'startDate'}
                        render={this.renderStartDateEdit}>
                        <FormLabel text={'Дата включения'}/>
                    </FormSimpleItem>
                    <FormSimpleItem
                        name={'endDate'}
                        render={this.renderEndDateEdit}>
                        <FormLabel text={'Дата исключения'}/>
                    </FormSimpleItem>
                </Form>
            </ScrollView>
        )
    }
}

export default DictWorldSkillViewMainImpl;