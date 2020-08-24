import {connect} from "react-redux";
import PersonViewMainImpl from "./PersonViewMainImpl";
import {
    setDocumentAttachmentsVisible,
    setMainDataBirthday,
    setMainDataCaseVisible, setMainDataDocumentDate,
    setMainDataDocumentDocType, setMainDataDocumentIssueCode, setMainDataDocumentIssueOrgan,
    setMainDataDocumentNumber,
    setMainDataDocumentSeries,
    setMainDataEmail,
    setMainDataFirstName,
    setMainDataFirstNameD,
    setMainDataFirstNameR,
    setMainDataInn,
    setMainDataLastName,
    setMainDataLastNameD,
    setMainDataLastNameR,
    setMainDataLegalAddress,
    setMainDataMiddleName,
    setMainDataMiddleNameD,
    setMainDataMiddleNameR,
    setMainDataMunicipal,
    setMainDataPhone,
    setMainDataPhoneExtra,
    setMainDataPostAddress,
    setMainDataRegion,
    setMainDataSex,
    setMainDataSnils
} from "./actions";
import {loadMainDataMunicipals} from "./fetch";



const mapStateToProps = state => ({
    mainDataLastName: state.personView.mainData.lastName,
    mainDataFirstName: state.personView.mainData.firstName,
    mainDataMiddleName: state.personView.mainData.middleName,

    mainDataLastNameR: state.personView.mainData.lastNameR,
    mainDataFirstNameR: state.personView.mainData.firstNameR,
    mainDataMiddleNameR: state.personView.mainData.middleNameR,

    mainDataLastNameD: state.personView.mainData.lastNameD,
    mainDataFirstNameD: state.personView.mainData.firstNameD,
    mainDataMiddleNameD: state.personView.mainData.middleNameD,

    mainDataSex: state.personView.mainData.sex,
    mainDataSexes: state.personView.mainDataSexes,
    mainDataBirthday: state.personView.mainData.birthday,
    mainDataSnils : state.personView.mainData.snils,
    mainDataInn: state.personView.mainData.inn,

    mainDataPhone: state.personView.mainData.phone,
    mainDataPhoneExtra: state.personView.mainData.phoneExtra,
    mainDataEmail: state.personView.mainData.email,

    mainDataLegalAddress: state.personView.mainData.legalAddress,
    mainDataPostAddress: state.personView.mainData.postAddress,
    mainDataRegion: state.personView.mainData.region,
    mainDataRegions: state.personView.mainDataRegions,
    mainDataMunicipal: state.personView.mainData.municipal,
    mainDataMunicipals: state.personView.mainDataMunicipals,

    mainDataDocumentDocType: state.personView.mainData.documentDocType,
    mainDataDocumentDocTypes: state.personView.mainDataDocumentDocTypes,
    mainDataDocumentSeries: state.personView.mainData.documentSeries,
    mainDataDocumentNumber: state.personView.mainData.documentNumber,
    mainDataDocumentIssueOrgan: state.personView.mainData.documentIssueOrgan,
    mainDataDocumentDate: state.personView.mainData.documentDate,
    mainDataDocumentIssueCode: state.personView.mainData.documentIssueCode,

    mainDataCaseVisible: state.personView.mainDataCaseVisible,
    documentAttachmentsVisible: state.personView.documentAttachmentsVisible,
});
const mapDispatchToProps = dispatch => ({
    setMainDataLastName: (value) => dispatch(setMainDataLastName(value)),
    setMainDataFirstName: (value) => dispatch(setMainDataFirstName(value)),
    setMainDataMiddleName: (value) => dispatch(setMainDataMiddleName(value)),

    setMainDataLastNameR: (value) => dispatch(setMainDataLastNameR(value)),
    setMainDataFirstNameR: (value) => dispatch(setMainDataFirstNameR(value)),
    setMainDataMiddleNameR: (value) => dispatch(setMainDataMiddleNameR(value)),

    setMainDataLastNameD: (value) => dispatch(setMainDataLastNameD(value)),
    setMainDataFirstNameD: (value) => dispatch(setMainDataFirstNameD(value)),
    setMainDataMiddleNameD: (value) => dispatch(setMainDataMiddleNameD(value)),

    setMainDataSex: (value) => dispatch(setMainDataSex(value)),
    setMainDataBirthday: (value) => dispatch(setMainDataBirthday(value)),
    setMainDataSnils: (value) => dispatch(setMainDataSnils(value)),
    setMainDataInn: (value) => dispatch(setMainDataInn(value)),

    setMainDataPhone: (value) => dispatch(setMainDataPhone(value)),
    setMainDataPhoneExtra: (value) => dispatch(setMainDataPhoneExtra(value)),
    setMainDataEmail: (value) => dispatch(setMainDataEmail(value)),

    setMainDataLegalAddress: (value) => dispatch(setMainDataLegalAddress(value)),
    setMainDataPostAddress: (value) => dispatch(setMainDataPostAddress(value)),
    setMainDataRegion: (value) =>  {
        dispatch(setMainDataRegion(value));
        dispatch(loadMainDataMunicipals(value));
    },
    setMainDataMunicipal: (value) => dispatch(setMainDataMunicipal(value)),

    setMainDataDocumentDocType: (value) => dispatch(setMainDataDocumentDocType(value)),
    setMainDataDocumentSeries: (value) => dispatch(setMainDataDocumentSeries(value)),
    setMainDataDocumentNumber: (value) => dispatch(setMainDataDocumentNumber(value)),
    setMainDataDocumentIssueOrgan: (value) => dispatch(setMainDataDocumentIssueOrgan(value)),
    setMainDataDocumentDate: (value) => dispatch(setMainDataDocumentDate(value)),
    setMainDataDocumentIssueCode: (value) => dispatch(setMainDataDocumentIssueCode(value)),

    setMainDataCaseVisible: (visible) => dispatch(setMainDataCaseVisible(visible)),
    setDocumentAttachmentsVisible : (visible) => dispatch(setDocumentAttachmentsVisible(visible))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonViewMainImpl);