import React from "react";
import Box, { Item as BoxItem } from "devextreme-react/box";
import TabPanel, { Item as TabPanelItem } from "devextreme-react/tab-panel";

import LoadPanel from "devextreme-react/load-panel";
import PromptDelegate from "../../PromptDelegate";

import PersonViewCard from "./PersonViewCard";
import PersonViewMain from "./PersonViewMain";
import PersonViewProfession from "./PersonViewProfession";
import PersonViewRevisions from "./PersonViewRevisions";
import PersonViewToolbar from "./PersonViewToolbar";

import { PersonEditForm } from "../Components/PersonEditForm";
import { makeStyles } from "@material-ui/styles";

import Breadcrumbs from "../../ui/Breadcrumbs";
import InfoDrawer from "../../ui/InfoDrawer";
import { useFormState } from "react-final-form";
import { Form } from "react-final-form";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        width: "calc(100% - 280px)",
        flexDirection: "column"
    }
}));

const items = [
    {
        label: "Управление ООП",
        link: "#"
    },
    {
        label: "Ресурсы",
        link: "#"
    },
    {
        label: "Кадровые ресурсы",
        link: "#"
    }
];

function PersonViewRootImpl(props) {
    const {
        isLoading,
        isDataChanged,
        hasRevisionsData,
        promptSaveData,
        mainData,
        documentAttachments,
        uploadDocuments,
        loadRegionsList,
        loadMunicipalsByRegion,
        regions,
        activePage,
        loadData
    } = props;

    const classes = useStyles();

    // React.useEffect(() => {
    //     loadData();
    // }, [loadData]);

    return (
        <div className={classes.root}>
            <Breadcrumbs items={items} />
            <PersonViewToolbar />
            <Form
                onSubmit={values => {
                    console.log("submit", values);
                }}
                initialValues={mainData}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className={classes.form}>
                        <PersonEditForm />
                    </form>
                )}
            </Form>
            <InfoDrawer open={true} variant="permanent" anchor="right">
                <PersonViewCard id={props.id} showMore={false} />
            </InfoDrawer>

            <PromptDelegate
                when={isDataChanged}
                message={"Данные были изменены. Сохранить перед продолжением?"}
                onSave={promptSaveData}
            />
            <div></div>
        </div>
    );
}

export default PersonViewRootImpl;
