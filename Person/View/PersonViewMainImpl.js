import React from "react";

import ScrollView from "devextreme-react/scroll-view";
import Form, {
    SimpleItem as FormSimpleItem,
    GroupItem as FormGroupItem,
    EmptyItem as FormEmptyItem,
    Label as FormLabel
} from "devextreme-react/form";
import Button from "devextreme-react/button";
import TextBox from "devextreme-react/text-box";
import SelectBox from "devextreme-react/select-box";
import DateBox from "devextreme-react/date-box";
import withStyles from "@material-ui/core/styles/withStyles";

import PersonViewDocumentAttachments from "./PersonViewDocumentAttachments";

class PersonViewMainImpl extends React.PureComponent {

    constructor(props) {
        super(props);

        this.handleLastNameEdit = this.handleLastNameEdit.bind(this);
        this.renderLastNameEdit = this.renderLastNameEdit.bind(this);
        this.handleFirstNameEdit = this.handleFirstNameEdit.bind(this);
        this.renderFirstNameEdit = this.renderFirstNameEdit.bind(this);
        this.handleMiddleNameEdit = this.handleMiddleNameEdit.bind(this);
        this.renderMiddleNameEdit = this.renderMiddleNameEdit.bind(this);

        this.handleLastNameREdit = this.handleLastNameREdit.bind(this);
        this.renderLastNameREdit = this.renderLastNameREdit.bind(this);
        this.handleFirstNameREdit = this.handleFirstNameREdit.bind(this);
        this.renderFirstNameREdit = this.renderFirstNameREdit.bind(this);
        this.handleMiddleNameREdit = this.handleMiddleNameREdit.bind(this);
        this.renderMiddleNameREdit = this.renderMiddleNameREdit.bind(this);

        this.handleLastNameDEdit = this.handleLastNameDEdit.bind(this);
        this.renderLastNameDEdit = this.renderLastNameDEdit.bind(this);
        this.handleFirstNameDEdit = this.handleFirstNameDEdit.bind(this);
        this.renderFirstNameDEdit = this.renderFirstNameDEdit.bind(this);
        this.handleMiddleNameDEdit = this.handleMiddleNameDEdit.bind(this);
        this.renderMiddleNameDEdit = this.renderMiddleNameDEdit.bind(this);

        this.handleSexEdit = this.handleSexEdit.bind(this);
        this.renderSexEdit = this.renderSexEdit.bind(this);
        this.handleBirthdayEdit = this.handleBirthdayEdit.bind(this);
        this.renderBirthdayEdit = this.renderBirthdayEdit.bind(this);
        this.handleSnilsEdit = this.handleSnilsEdit.bind(this);
        this.renderSnilsEdit = this.renderSnilsEdit.bind(this);
        this.handleInnEdit = this.handleInnEdit.bind(this);
        this.renderInnEdit = this.renderInnEdit.bind(this);

        this.handlePhoneEdit = this.handlePhoneEdit.bind(this);
        this.renderPhoneEdit = this.renderPhoneEdit.bind(this);
        this.handlePhoneExtraEdit = this.handlePhoneExtraEdit.bind(this);
        this.renderPhoneExtraEdit = this.renderPhoneExtraEdit.bind(this);
        this.handleEmailEdit = this.handleEmailEdit.bind(this);
        this.renderEmailEdit = this.renderEmailEdit.bind(this);

        this.handleLegalAddressEdit = this.handleLegalAddressEdit.bind(this);
        this.renderLegalAddressEdit = this.renderLegalAddressEdit.bind(this);
        this.handlePostAddressEdit = this.handlePostAddressEdit.bind(this);
        this.renderPostAddressEdit = this.renderPostAddressEdit.bind(this);
        this.handleRegionEdit = this.handleRegionEdit.bind(this);
        this.renderRegionEdit = this.renderRegionEdit.bind(this);
        this.handleMunicipalEdit = this.handleMunicipalEdit.bind(this);
        this.renderMunicipalEdit = this.renderMunicipalEdit.bind(this);

        this.handleDocumentDocTypeEdit = this.handleDocumentDocTypeEdit.bind(this);
        this.renderDocumentDocTypeEdit = this.renderDocumentDocTypeEdit.bind(this);
        this.handleDocumentSeriesEdit = this.handleDocumentSeriesEdit.bind(this);
        this.renderDocumentSeriesEdit = this.renderDocumentSeriesEdit.bind(this);
        this.handleDocumentNumberEdit = this.handleDocumentNumberEdit.bind(this);
        this.renderDocumentNumberEdit = this.renderDocumentNumberEdit.bind(this);
        this.handleDocumentIssueOrganEdit = this.handleDocumentIssueOrganEdit.bind(this);
        this.renderDocumentIssueOrganEdit = this.renderDocumentIssueOrganEdit.bind(this);
        this.handleDocumentDateEdit = this.handleDocumentDateEdit.bind(this);
        this.renderDocumentDateEdit = this.renderDocumentDateEdit.bind(this);
        this.handleDocumentIssueCodeEdit = this.handleDocumentIssueCodeEdit.bind(this);
        this.renderDocumentIssueCodeEdit = this.renderDocumentIssueCodeEdit.bind(this);


        this.handleCaseVisibleButton = this.handleCaseVisibleButton.bind(this);
        this.renderCaseVisibleButton = this.renderCaseVisibleButton.bind(this);
        this.handleDocumentAttachmentsVisibleButton = this.handleDocumentAttachmentsVisibleButton.bind(this);
        this.renderDocumentAttachmentsVisibleButton = this.renderDocumentAttachmentsVisibleButton.bind(this);
    }

    handleLastNameEdit(e) {
        let {setMainDataLastName} = this.props;
        setMainDataLastName(e.value);
    }

    renderLastNameEdit() {
        let {mainDataLastName} = this.props;
        return (<TextBox value={mainDataLastName} onValueChanged={this.handleLastNameEdit}/>)
    }

    handleFirstNameEdit(e) {
        let {setMainDataFirstName} = this.props;
        setMainDataFirstName(e.value);
    }

    renderFirstNameEdit() {
        let {mainDataFirstName} = this.props;
        return (<TextBox value={mainDataFirstName} onValueChanged={this.handleFirstNameEdit}/>)
    }

    handleMiddleNameEdit(e) {
        let {setMainDataMiddleName} = this.props;
        setMainDataMiddleName(e.value);
    }

    renderMiddleNameEdit() {
        let {mainDataMiddleName} = this.props;
        return (<TextBox value={mainDataMiddleName} onValueChanged={this.handleMiddleNameEdit}/>)
    }

    handleCaseVisibleButton() {
        let {
            mainDataCaseVisible,
            setMainDataCaseVisible,
            mainDataFirstName,
            mainDataFirstNameR,
            mainDataFirstNameD,
            mainDataLastName,
            mainDataLastNameR,
            mainDataLastNameD,
            mainDataMiddleName,
            mainDataMiddleNameR,
            mainDataMiddleNameD,
            setMainDataFirstNameR,
            setMainDataFirstNameD,
            setMainDataLastNameR,
            setMainDataLastNameD,
            setMainDataMiddleNameR,
            setMainDataMiddleNameD
        } = this.props;
        if (!mainDataCaseVisible) {
            let hasLastName = mainDataLastName != null && mainDataLastName.trim().length > 0;
            let hasLastNameR = mainDataLastNameR != null && mainDataLastNameR.trim().length > 0;
            let hasLastNameD = mainDataLastNameD != null && mainDataLastNameD.trim().length > 0;
            let hasFirstName = mainDataFirstName != null && mainDataFirstName.trim().length > 0;
            let hasFirstNameR = mainDataFirstNameR != null && mainDataFirstNameR.trim().length > 0;
            let hasFirstNameD = mainDataFirstNameD != null && mainDataFirstNameD.trim().length > 0;
            let hasMiddleName = mainDataMiddleName != null && mainDataMiddleName.trim().length > 0;
            let hasMiddleNameR = mainDataMiddleNameR != null && mainDataMiddleNameR.trim().length > 0;
            let hasMiddleNameD = mainDataMiddleNameD != null && mainDataMiddleNameD.trim().length > 0;
            if (!hasLastNameR && hasLastName) {
                setMainDataLastNameR(mainDataLastName);
            }
            if (!hasLastNameD && hasLastName) {
                setMainDataLastNameD(mainDataLastName);
            }
            if (!hasFirstNameR && hasFirstName) {
                setMainDataFirstNameR(mainDataFirstName)
            }
            if (!hasFirstNameD && hasFirstName) {
                setMainDataFirstNameD(mainDataFirstName)
            }
            if (!hasMiddleNameR && hasMiddleName) {
                setMainDataMiddleNameR(mainDataMiddleName)
            }
            if (!hasMiddleNameD && hasMiddleName) {
                setMainDataMiddleNameD(mainDataMiddleName)
            }
        }
        setMainDataCaseVisible(!mainDataCaseVisible);
    }

    renderCaseVisibleButton() {
        let {mainDataCaseVisible} = this.props;
        let icon = mainDataCaseVisible ? 'chevronup' : 'chevrondown';
        return (<Button text={'Склонения ФИО'} icon={icon} onClick={this.handleCaseVisibleButton}/>);
    }


    handleLastNameREdit(e) {
        let {setMainDataLastNameR} = this.props;
        setMainDataLastNameR(e.value);
    }

    renderLastNameREdit() {
        let {mainDataLastNameR} = this.props;
        return (<TextBox value={mainDataLastNameR} onValueChanged={this.handleLastNameREdit}/>)
    }

    handleFirstNameREdit(e) {
        let {setMainDataFirstNameR} = this.props;
        setMainDataFirstNameR(e.value);
    }

    renderFirstNameREdit() {
        let {mainDataFirstNameR} = this.props;
        return (<TextBox value={mainDataFirstNameR} onValueChanged={this.handleFirstNameREdit}/>)
    }

    handleMiddleNameREdit(e) {
        let {setMainDataMiddleNameR} = this.props;
        setMainDataMiddleNameR(e.value);
    }

    renderMiddleNameREdit() {
        let {mainDataMiddleNameR} = this.props;
        return (<TextBox value={mainDataMiddleNameR} onValueChanged={this.handleMiddleNameREdit}/>)
    }

    handleLastNameDEdit(e) {
        let {setMainDataLastNameD} = this.props;
        setMainDataLastNameD(e.value);
    }

    renderLastNameDEdit() {
        let {mainDataLastNameD} = this.props;
        return (<TextBox value={mainDataLastNameD} onValueChanged={this.handleLastNameDEdit}/>)
    }

    handleFirstNameDEdit(e) {
        let {setMainDataFirstNameD} = this.props;
        setMainDataFirstNameD(e.value);
    }

    renderFirstNameDEdit() {
        let {mainDataFirstNameD} = this.props;
        return (<TextBox value={mainDataFirstNameD} onValueChanged={this.handleFirstNameDEdit}/>)
    }

    handleMiddleNameDEdit(e) {
        let {setMainDataMiddleNameD} = this.props;
        setMainDataMiddleNameD(e.value);
    }

    renderMiddleNameDEdit() {
        let {mainDataMiddleNameD} = this.props;
        return (<TextBox value={mainDataMiddleNameD} onValueChanged={this.handleMiddleNameDEdit}/>)
    }

    handleSexEdit(e) {
        let {setMainDataSex} = this.props;
        setMainDataSex(e.value);
    }

    renderSexEdit() {
        let {mainDataSex, mainDataSexes} = this.props;
        return (
            <SelectBox
                value={mainDataSex}
                items={mainDataSexes}
                displayExpr={'name'}
                valueExpr={'id'}
                showClearButton={true}
                searchEnabled={true}
                searchExpr={'name'}
                onValueChanged={this.handleSexEdit}/>)
    }

    handleBirthdayEdit(e) {
        let {setMainDataBirthday} = this.props;
        setMainDataBirthday(e.value);
    }

    renderBirthdayEdit() {
        let {mainDataBirthday} = this.props;
        return (<DateBox value={mainDataBirthday} onValueChanged={this.handleBirthdayEdit}/>)
    }

    handleSnilsEdit(e) {
        let {setMainDataSnils} = this.props;
        setMainDataSnils(e.value);
    }

    renderSnilsEdit() {
        let {mainDataSnils} = this.props;
        return (
            <TextBox
                value={mainDataSnils}
                mask={'000-000-000 00'}
                useMaskedValue={true}
                onValueChanged={this.handleSnilsEdit}/>
        )
    }

    handleInnEdit(e) {
        let {setMainDataInn} = this.props;
        setMainDataInn(e.value);
    }

    renderInnEdit() {
        let {mainDataInn} = this.props;
        return (<TextBox value={mainDataInn} onValueChanged={this.handleInnEdit}/>)
    }

    handlePhoneEdit(e) {
        let {setMainDataPhone} = this.props;
        setMainDataPhone(e.value);
    }

    renderPhoneEdit() {
        let {mainDataPhone} = this.props;
        return (
            <TextBox
                value={mainDataPhone}
                mask={'+7 (000) 000-00-00'}
                useMaskedValue={true}
                onValueChanged={this.handlePhoneEdit}/>
        )
    }

    handlePhoneExtraEdit(e) {
        let {setMainDataPhoneExtra} = this.props;
        setMainDataPhoneExtra(e.value);
    }

    renderPhoneExtraEdit() {
        let {mainDataPhoneExtra} = this.props;
        return (<TextBox value={mainDataPhoneExtra} onValueChanged={this.handlePhoneExtraEdit}/>)
    }

    handleEmailEdit(e) {
        let {setMainDataEmail} = this.props;
        setMainDataEmail(e.value);
    }

    renderEmailEdit() {
        let {mainDataEmail} = this.props;
        return (<TextBox value={mainDataEmail} onValueChanged={this.handleEmailEdit}/>)
    }

    handleLegalAddressEdit(e) {
        let {setMainDataLegalAddress} = this.props;
        setMainDataLegalAddress(e.value);
    }

    renderLegalAddressEdit() {
        let {mainDataLegalAddress} = this.props;
        return (<TextBox value={mainDataLegalAddress} onValueChanged={this.handleLegalAddressEdit}/>)
    }

    handlePostAddressEdit(e) {
        let {setMainDataPostAddress} = this.props;
        setMainDataPostAddress(e.value);
    }

    renderPostAddressEdit() {
        let {mainDataPostAddress} = this.props;
        return (<TextBox value={mainDataPostAddress} onValueChanged={this.handlePostAddressEdit}/>)
    }

    handleRegionEdit(e) {
        let {setMainDataRegion} = this.props;
        setMainDataRegion(e.value);
    }

    renderRegionEdit() {
        let {mainDataRegion, mainDataRegions} = this.props;
        return (
            <SelectBox
                value={mainDataRegion}
                displayExpr={'name'}
                valueExpr={'id'}
                showClearButton={true}
                searchEnabled={true}
                searchExpr={'name'}
                items={mainDataRegions}
                onValueChanged={this.handleRegionEdit}/>
        )
    }

    handleMunicipalEdit(e) {
        let {setMainDataMunicipal} = this.props;
        setMainDataMunicipal(e.value);
    }

    renderMunicipalEdit() {
        let {mainDataMunicipal, mainDataMunicipals} = this.props;
        return (
            <SelectBox
                value={mainDataMunicipal}
                displayExpr={'name'}
                valueExpr={'id'}
                showClearButton={true}
                searchEnabled={true}
                searchExpr={'name'}
                items={mainDataMunicipals}
                onValueChanged={this.handleMunicipalEdit}/>
        )
    }

    handleDocumentDocTypeEdit(e) {
        let {setMainDataDocumentDocType} = this.props;
        setMainDataDocumentDocType(e.value);
    }

    renderDocumentDocTypeEdit() {
        let {mainDataDocumentDocType, mainDataDocumentDocTypes} = this.props;
        return (
            <SelectBox
                value={mainDataDocumentDocType}
                displayExpr={'name'}
                valueExpr={'id'}
                showClearButton={true}
                searchEnabled={true}
                searchExpr={'name'}
                items={mainDataDocumentDocTypes}
                onValueChanged={this.handleDocumentDocTypeEdit}/>
        )
    }

    handleDocumentSeriesEdit(e) {
        let {setMainDataDocumentSeries} = this.props;
        setMainDataDocumentSeries(e.value);
    }

    renderDocumentSeriesEdit() {
        let {mainDataDocumentSeries} = this.props;
        return (<TextBox value={mainDataDocumentSeries} onValueChanged={this.handleDocumentSeriesEdit}/>)
    }

    handleDocumentNumberEdit(e) {
        let {setMainDataDocumentNumber} = this.props;
        setMainDataDocumentNumber(e.value);
    }

    renderDocumentNumberEdit() {
        let {mainDataDocumentNumber} = this.props;
        return (<TextBox value={mainDataDocumentNumber} onValueChanged={this.handleDocumentNumberEdit}/>)
    }


    handleDocumentIssueOrganEdit(e) {
        let {setMainDataDocumentIssueOrgan} = this.props;
        setMainDataDocumentIssueOrgan(e.value);
    }

    renderDocumentIssueOrganEdit() {
        let {mainDataDocumentIssueOrgan} = this.props;
        return (<TextBox value={mainDataDocumentIssueOrgan} onValueChanged={this.handleDocumentIssueOrganEdit}/>)
    }

    handleDocumentDateEdit(e) {
        let {setMainDataDocumentDate} = this.props;
        setMainDataDocumentDate(e.value);
    }

    renderDocumentDateEdit() {
        let {mainDataDocumentDate} = this.props;
        return (<DateBox value={mainDataDocumentDate} onValueChanged={this.handleDocumentDateEdit}/>)
    }

    handleDocumentIssueCodeEdit(e) {
        let {setMainDataDocumentIssueCode} = this.props;
        setMainDataDocumentIssueCode(e.value);
    }

    renderDocumentIssueCodeEdit() {
        let {mainDataDocumentIssueCode} = this.props;
        return (<TextBox value={mainDataDocumentIssueCode} onValueChanged={this.handleDocumentIssueCodeEdit}/>)
    }


    handleDocumentAttachmentsVisibleButton() {
        let {
            documentAttachmentsVisible,
            setDocumentAttachmentsVisible
        } = this.props;

        setDocumentAttachmentsVisible(!documentAttachmentsVisible);
    }

    renderDocumentAttachmentsVisibleButton() {
        let {documentAttachmentsVisible} = this.props;
        let icon = documentAttachmentsVisible ? 'chevronup' : 'chevrondown';
        return (<Button text={'Скан документа'} icon={icon} onClick={this.handleDocumentAttachmentsVisibleButton}/>);
    }

    render() {
        let {
            mainDataCaseVisible
        } = this.props;
        return (
            <ScrollView width={'100%'} height={'100%'}
                        className={'copp-person-view-info-main'}>
                <Form labelLocation={'top'}>
                    <FormGroupItem colCount={4} caption={'Личные данные'}>
                        <FormSimpleItem name={'lastName'} render={this.renderLastNameEdit}>
                            <FormLabel text={'Фамилия'}/>
                        </FormSimpleItem>
                        <FormSimpleItem name={'firstName'} render={this.renderFirstNameEdit}>
                            <FormLabel text={'Имя'}/>
                        </FormSimpleItem>
                        <FormSimpleItem name={'middleName'} render={this.renderMiddleNameEdit}>
                            <FormLabel text={'Отчество'}/>
                        </FormSimpleItem>
                        <FormSimpleItem
                            name={'caseVisible'}
                            horizontalAlignment={'left'}
                            verticalAlignment={'bottom'}
                            render={this.renderCaseVisibleButton}/>

                        <FormGroupItem colSpan={4}>
                            <FormGroupItem visible={mainDataCaseVisible} colCount={4}>
                                <FormSimpleItem name={'lastNameR'} render={this.renderLastNameREdit}>
                                    <FormLabel text={'Фамилия (родительный)'}/>
                                </FormSimpleItem>
                                <FormSimpleItem name={'firstNameR'} render={this.renderFirstNameREdit}>
                                    <FormLabel text={'Имя  (родительный)'}/>
                                </FormSimpleItem>
                                <FormSimpleItem name={'middleNameR'} render={this.renderMiddleNameREdit}>
                                    <FormLabel text={'Отчество  (родительный)'}/>
                                </FormSimpleItem>
                                <FormEmptyItem/>
                                <FormSimpleItem name={'lastNameD'} render={this.renderLastNameDEdit}>
                                    <FormLabel text={'Фамилия (дательный)'}/>
                                </FormSimpleItem>
                                <FormSimpleItem name={'firstNameD'} render={this.renderFirstNameDEdit}>
                                    <FormLabel text={'Имя  (дательный)'}/>
                                </FormSimpleItem>
                                <FormSimpleItem name={'middleNameD'} render={this.renderMiddleNameDEdit}>
                                    <FormLabel text={'Отчество  (дательный)'}/>
                                </FormSimpleItem>
                                <FormEmptyItem/>
                            </FormGroupItem>
                        </FormGroupItem>

                        <FormSimpleItem name={'sex'} render={this.renderSexEdit}>
                            <FormLabel text={'Пол'}/>
                        </FormSimpleItem>
                        <FormSimpleItem name={'birthday'} render={this.renderBirthdayEdit}>
                            <FormLabel text={'Дата рождения'}/>
                        </FormSimpleItem>
                        <FormSimpleItem name={'snils'} render={this.renderSnilsEdit}>
                            <FormLabel text={'СНИЛС'}/>
                        </FormSimpleItem>
                        <FormSimpleItem name={'inn'} render={this.renderInnEdit}>
                            <FormLabel text={'ИНН'}/>
                        </FormSimpleItem>
                    </FormGroupItem>

                    <FormGroupItem colCount={4} caption={'Контактная информация'}>
                        <FormSimpleItem name={'phone'} render={this.renderPhoneEdit}>
                            <FormLabel text={'Телефон (основной)'}/>
                        </FormSimpleItem>
                        <FormSimpleItem name={'phoneExtra'} render={this.renderPhoneExtraEdit}>
                            <FormLabel text={'Дополнительные телефоны'}/>
                        </FormSimpleItem>
                        <FormSimpleItem name={'email'} render={this.renderEmailEdit}>
                            <FormLabel text={'E-mail'}/>
                        </FormSimpleItem>
                        <FormEmptyItem/>
                    </FormGroupItem>

                    <FormGroupItem colCount={2} caption={'Адреса'}>
                        <FormSimpleItem name={'legalAddress'} render={this.renderLegalAddressEdit}>
                            <FormLabel text={'Адрес регистрации'}/>
                        </FormSimpleItem>
                        <FormSimpleItem name={'region'} render={this.renderRegionEdit}>
                            <FormLabel text={'Регион'}/>
                        </FormSimpleItem>
                        <FormSimpleItem name={'postAddress'} render={this.renderPostAddressEdit}>
                            <FormLabel text={'Почтовый регистрации'}/>
                        </FormSimpleItem>
                        <FormSimpleItem name={'municipal'} render={this.renderMunicipalEdit}>
                            <FormLabel text={'Муниципальное образование'}/>
                        </FormSimpleItem>
                    </FormGroupItem>

                    <FormGroupItem colCount={8} caption={'Документ удостоверяющий личность'}>
                        <FormSimpleItem name={'documentDocType'} colSpan={2} render={this.renderDocumentDocTypeEdit}>
                            <FormLabel text={'Тип документа'}/>
                        </FormSimpleItem>
                        <FormSimpleItem name={'documentSeries'} render={this.renderDocumentSeriesEdit}>
                            <FormLabel text={'Серия'}/>
                        </FormSimpleItem>
                        <FormSimpleItem name={'documentNumber'} render={this.renderDocumentNumberEdit}>
                            <FormLabel text={'Номер'}/>
                        </FormSimpleItem>
                        <FormSimpleItem colSpan={4} name={'documentIssueOrgan'}
                                        render={this.renderDocumentIssueOrganEdit}>
                            <FormLabel text={'Кем выдан'}/>
                        </FormSimpleItem>
                        <FormSimpleItem colSpan={2} name={'documentDate'} render={this.renderDocumentDateEdit}>
                            <FormLabel text={'Дата выдачи'}/>
                        </FormSimpleItem>
                        <FormSimpleItem colSpan={2} name={'documentIssueCode'}
                                        render={this.renderDocumentIssueCodeEdit}>
                            <FormLabel text={'Код подразделения'}/>
                        </FormSimpleItem>
                        <FormSimpleItem
                            name={'documentAttachmentsVisible'}
                            horizontalAlignment={'left'}
                            verticalAlignment={'bottom'}
                            render={this.renderDocumentAttachmentsVisibleButton}/>
                    </FormGroupItem>
                </Form>
                <PersonViewDocumentAttachments/>
            </ScrollView>
        );
    }
}

export default withStyles(theme => ({
    root: {
        width: '100%',
        padding: theme.spacing(1)
    }
}))(PersonViewMainImpl);