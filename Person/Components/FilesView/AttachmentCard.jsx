import React from "react";
import { makeStyles, IconButton, List, ListItem } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import { removeDocumentAttachment } from "../../View/delete";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        width: 150,
        height: 150,
        background: "#FFFFFF",
        border: "1px solid #CACCD1",
        boxSizing: "border-box",
        boxShadow:
            "0px 1px 1px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.2)",
        borderRadius: "5px",
        margin: `0 ${theme.spacing(2)}px ${theme.spacing(2)}px 0`,
        flexDirection: "column",
        padding: theme.spacing(1),
        position: "relative",
        fontSize: "10px",
        lineHeight: "16px"
    },
    row: {
        marginBottom: theme.spacing(1),
        display: "flex",
        justifyContent: "space-between"
    },
    icon: {
        width: 75,
        height: 75,
        border: "1px solid grey"
    },
    fileMenu: {
        display: "flex",
        flexDirection: "column"
    },
    actionsMenu: {
        position: "absolute",
        top: 0,
        right: 0,
        height: 150,
        width: "60%",
        backgroundColor: "rgba(89, 110, 121, 0.8)",
        boxSizing: "border-box",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end"
    },
    actionIconButton: {
        margin: theme.spacing()
    },
    menu: {
        width: "100%"
    },
    menuItem: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        color: "#FFF",
        cursor: "pointer",
        fontSize: "12px"
    },
    fileName: {
        color: "#304967"
    },
    fileSize: {
        color: "#BDBDBD"
    }
}));

function FileMenu(props) {
    const classes = useStyles();
    const { onMenuClick } = props;
    return (
        <div className={classes.fileMenu}>
            <IconButton size="small" onClick={onMenuClick}>
                <MoreHorizIcon fontSize="small" />
            </IconButton>
            <IconButton size="small">
                <CloudDownloadOutlinedIcon fontSize="small" />
            </IconButton>
        </div>
    );
}

function AttachmentCard(props) {
    const classes = useStyles();
    const { id, mimeType, fileName, fileSize } = props.fileInfo;
    const { removeDocumentAttachment } = props;
    const [showActionsMenu, setShowActionsMenu] = React.useState(false);

    const toggleActionsMenu = () => {
        setShowActionsMenu(s => !s);
    };

    const closeActionsMenu = () => {
        setShowActionsMenu(false);
    };

    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <div className={classes.icon}></div>
                <div>
                    <FileMenu onMenuClick={toggleActionsMenu} />
                </div>
            </div>
            <div className={classes.fileName}>{fileName}</div>
            <div className={classes.fileSize}>{fileSize}</div>
            {showActionsMenu && (
                <div className={classes.actionsMenu}>
                    <IconButton
                        size="small"
                        onClick={closeActionsMenu}
                        className={classes.actionIconButton}
                    >
                        <MoreHorizIcon
                            fontSize="small"
                            style={{ color: "#FFF" }}
                        />
                    </IconButton>
                    <List className={classes.menu}>
                        <ListItem
                            className={classes.menuItem}
                            onClick={() => removeDocumentAttachment(id)}
                        >
                            Удалить
                        </ListItem>
                    </List>
                </div>
            )}
        </div>
    );
}

const mapDispatchToProps = {
    removeDocumentAttachment
};

export default connect(null, mapDispatchToProps)(AttachmentCard);
