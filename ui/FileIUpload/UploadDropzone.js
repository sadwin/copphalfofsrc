import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDropzone } from "react-dropzone";
// import UploadIcon from "./UploadIcon.png";
import Button from "../Button";
import prettyBytes from "pretty-bytes"

const useStyles = makeStyles(() => ({
    dropzoneRoot: {
        background: "#F2F4F7",
        border: "1px dashed #596E79",
        boxSizing: "border-box",
        borderRadius: "10px",
        height: "128px",
        display: "flex",
        padding: "30px 30px 20px 30px"
    },
    buttonDropzone: {
        display: "flex",
        alignItems: "center",
        "& > span": {
            fontSize: 12,
            color: "#000000",
            marginLeft: 25
        }
    },
    caption: {
        marginTop: 10,
        "& div": {
            fontSize: 10,
            color: "#778899"
        }
    },
    captionBlock: {
        marginLeft: 35
    }
}));

export default function UploadDropzone({ onDrop, accept, maxSize }) {
    const classes = useStyles();

    const onDropCallback = useCallback(
        acceptedFiles => {
            onDrop(acceptedFiles);
        },
        [onDrop]
    );

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: onDropCallback,
        accept,
        maxSize
    });

    const acceptedString = React.useMemo(() => {
        if (Array.isArray(accept)) {
            return accept.join(",");
        }

        return accept;
    }, [accept]);

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className={classes.dropzoneRoot}>
                {/* <img src={UploadIcon} alt="" /> */}
                <div className={classes.captionBlock}>
                    <div className={classes.buttonDropzone}>
                        <Button>Выбрать файл</Button>
                        <span>или перетащите сюда</span>
                    </div>
                    <div className={classes.caption}>
                        <div>Допустимые расширения: {acceptedString}</div>
                        <div>Максимальный размер файла: {prettyBytes(maxSize)}.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
