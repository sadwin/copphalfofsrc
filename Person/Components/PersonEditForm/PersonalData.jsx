import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { TextField, Select } from "mui-rff";
import { ContentToggle } from "../../../ui/ContentToggle";
import Collapse from "@material-ui/core/Collapse";
import UploadDropzone from "../../../ui/FileIUpload/UploadDropzone";
import { AttachmentsList } from "../FilesView/AttachmentsList";
import { AutocomleteField } from "../AutocomleteField";
import { MenuItem } from "@material-ui/core";
import { KeyboardDatePicker } from "../KeyboardDatePicker";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";
import { connect } from "react-redux";
import { useFormState } from "react-final-form";

import { loadList as loadRegionsList } from "../../../Dict/Region/View/fetch";
import { loadByRegion as loadMunicipalsByRegion } from "../../../Dict/Municipal/View/fetch";
import { uploadDocuments } from "../../View/fetch";

function documentAttachments(state) {
    return state.personView.documentAttachments || [];
}

function regions(state) {
    return state.dictRegionView.list || [];
}

function municipalsMap(state) {
    return state.dictMunicipalView.regionMap || {};
}

const mapStateToProps = state => ({
    documentAttachments: documentAttachments(state),
    regions: regions(state),
    municipalsMap: municipalsMap(state)
});

const mapDispatchToProps = {
    uploadDocuments,
    loadRegionsList,
    loadMunicipalsByRegion
};

export const PersonalData = connect(
    mapStateToProps,
    mapDispatchToProps
)(props => {
    const {
        loadRegionsList,
        loadMunicipalsByRegion,
        uploadDocuments,
        documentAttachments
    } = props;
    const [showDeclentions, setShowDeclentions] = React.useState(false);
    const [showScans, setShowScans] = React.useState(false);
    const { values } = useFormState();

    const hadleDeclentionsToggle = () => {
        setShowDeclentions(s => !s);
    };

    const hadleScansToggle = () => {
        setShowScans(s => !s);
    };

    React.useEffect(() => {
        loadRegionsList();
    }, [loadRegionsList]);

    React.useEffect(() => {
        if (values.region !== undefined && values.region !== null) {
            loadMunicipalsByRegion(values.region);
            values.municipal = undefined;
        }
    }, [values.region, values.municipal, loadMunicipalsByRegion]);

    const regionsData = React.useMemo(() => {
        return props.regions.map(({ id, name }) => ({
            label: name,
            value: id
        }));
    }, [props.regions]);

    const municipalsData = React.useMemo(() => {
        const municipals = props.municipalsMap[values.region] || [];
        return municipals.map(({ id, name }) => ({
            label: name,
            value: id
        }));
    }, [values.region, props.municipalsMap]);

    return (
        <div>
            <Typography>Личные данные</Typography>
            <Grid container spacing={0}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <TextField
                            name="lastName"
                            label="Фамилия"
                            InputLabelProps={{
                                shrink: true
                            }}
                            required
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            name="firstName"
                            label="Имя"
                            InputLabelProps={{
                                shrink: true
                            }}
                            required
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            name="middleName"
                            label="Отчество"
                            InputLabelProps={{
                                shrink: true
                            }}
                            required
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <ContentToggle
                            open={showDeclentions}
                            onToggle={hadleDeclentionsToggle}
                            label="Склонения ФИО"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Collapse in={showDeclentions}>
                <Grid container spacing={0}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <TextField
                                name="lastNameR"
                                label="Фамилия (родительный падеж)"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                name="firstNameR"
                                label="Имя (родительный падеж)"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                name="middleNameR"
                                label="Отчество (родительный падеж)"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <TextField
                                name="lastNameD"
                                label="Фамилия (дательный падеж)"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                name="firstNameD"
                                label="Имя (дательный падеж)"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                name="middleNameD"
                                label="Отчество (дательный падеж)"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                </Grid>
            </Collapse>

            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Select
                        name="sex"
                        label="Пол"
                        formControlProps={{ margin: "normal" }}
                        value={"-1"}
                        inputLabelProps={{
                            shrink: true
                        }}
                    >
                        <MenuItem value={"-1"}>Не указан</MenuItem>
                        <MenuItem value={"0"}>Женский</MenuItem>
                        <MenuItem value={"1"}>Мужской</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={3}>
                    <KeyboardDatePicker
                        label="Дата рождения"
                        name="birthday"
                        dateFunsUtils={DateFnsUtils}
                        locale={ruLocale}
                        format="dd.MM.yyyy"
                        keyboardIcon={<ArrowDropDownIcon />}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        name="snils"
                        label="СНИЛС"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        name="inn"
                        label="ИНН"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </Grid>
            </Grid>
            <Typography>Контактная информация</Typography>
            <Grid container spacing={0}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <TextField
                            name="phone"
                            label="Телефон"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            name="phoneExtra"
                            label="Телефон (дополнительный)"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            name="email"
                            label="Email"
                            required
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Typography>Адреса</Typography>
            <Grid container spacing={0}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            name="legalAddress"
                            label="Адрес регистрации"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <AutocomleteField
                            name="region"
                            label="Регион"
                            options={regionsData}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            name="postAddress"
                            label="Почтовый адрес"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <AutocomleteField
                            name="municipal"
                            label="Муниципальное образование"
                            options={municipalsData}
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Typography>Документ удостоверяющий личность</Typography>
            <Grid container spacing={0}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <TextField
                            name="documentType"
                            label="Тип документа"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>

                    <Grid item xs={1}>
                        <TextField
                            name="documentSerie"
                            label="Серия"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>

                    <Grid item xs={2}>
                        <TextField
                            name="documentNum"
                            label="Номер"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            name="issue"
                            label="Кем выдан"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <KeyboardDatePicker
                            label="Дата выдачи"
                            name="issueDate"
                            dateFunsUtils={DateFnsUtils}
                            locale={ruLocale}
                            format="dd.MM.yyyy"
                            keyboardIcon={<ArrowDropDownIcon />}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            name="kod"
                            label="Код подразделения"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <ContentToggle
                            open={showScans}
                            onToggle={hadleScansToggle}
                            label="Скан документа"
                        />
                    </Grid>
                </Grid>
                <Collapse in={showScans}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography>
                                Сканы документа, удостоверяющего личность
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <AttachmentsList files={documentAttachments} />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <UploadDropzone
                                onDrop={files => {
                                    uploadDocuments(files);
                                }}
                                accept={[
                                    ".jpg",
                                    ".jpeg",
                                    ".png",
                                    ".pdf",
                                    ".docx"
                                ]}
                                maxSize={4000000}
                            />
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </div>
    );
});
