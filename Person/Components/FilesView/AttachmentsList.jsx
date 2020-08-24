import React from "react";
import { makeStyles } from "@material-ui/core";
import AttachmentCard from "./AttachmentCard";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    }
}));

export function AttachmentsList(props) {
    const classes = useStyles({});
    const { files } = props;

    console.log(files);

    if (!files || files.length === 0) {
        return null;
    }

    return (
        <div className={classes.root}>
            {files.map(fileInfo => (
                <AttachmentCard key={fileInfo.id} fileInfo={fileInfo} />
            ))}
        </div>
    );
}
