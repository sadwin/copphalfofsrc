import React from "react";
import TextField from "@material-ui/core/TextField";
import { getTreeFromFlatData } from "../../util/getTreeFormFlatData";

import { Field } from "react-final-form";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";

export function TreeviewField(props) {
    const { name } = props;

    return (
        <Field
            name={name}
            render={fieldRenderProps => (
                <TreeviewFieldWrapper {...fieldRenderProps} {...props} />
            )}
        />
    );
}

const useStyles = makeStyles(theme => ({
    popper: {
        zIndex: theme.zIndex.modal
    },
    paper: {
        padding: theme.spacing()
    }
}));

function TreeviewFieldWrapper(props) {
    const {
        input: { name, onChange, value, ...restInput },
        meta,
        options,
        getOptionLabel,
        label,
        ...rest
    } = props;

    const classes = useStyles();
    const inputRef = React.useRef()

    const defaultProps = {
        options,
        getOptionLabel: getOptionLabel ? getOptionLabel : option => option.label
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const showError =
        ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
        meta.touched;

    const treeData = getTreeFromFlatData({ flatData: options, rootKey: null });

    const handleTreeSelect = item => () => {
        console.log(item);
        // setAnchorEl(null);
    };

    const renderTree = tree => {
        // const TreeData = [];
        if (!tree || (tree && tree.length === 0)) {
            return null;
        }

        const treeNodes = tree.map(item => {
            if (
                !item.children ||
                (item.children && item.children.length === 0)
            ) {
                return (
                    <TreeItem
                        key={`tree-node-${item.id}`}
                        nodeId={item.id}
                        label={
                            <div onClick={handleTreeSelect(item)}>
                                {item.label}
                            </div>
                        }
                    />
                );
            }

            return (
                <TreeItem
                    key={`tree-node-${item.id}`}
                    nodeId={item.id.toString()}
                    label={
                        <div onClick={handleTreeSelect(item)}>{item.label}</div>
                    }
                    onClick={handleTreeSelect(item)}
                >
                    {renderTree(item.children)}
                </TreeItem>
            );
        });
        return treeNodes;
    };

    const handleFocus = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleBlur = () => {
        console.log("handleBlur");
        handleClose();
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMouseDown = event => {
        if (event.target.nodeName !== "INPUT") {
            // Prevent blur
            event.preventDefault();
        }
    };

    const handleClick = () => {
        inputRef.current.focus();
        inputRef.current.select();
    }

    return (
        <div onMouseDown={handleMouseDown}>
            <TextField
                onFocus={handleFocus}
                onBlur={handleBlur}
                fullWidth
                InputLabelProps={{ shrink: true }}
                label={label}
                inputProps={{ref: inputRef}}
            />
            <Popper
                open={!!anchorEl}
                // open
                anchorEl={anchorEl}
                className={classes.popper}
                style={{
                    width: anchorEl ? anchorEl.clientWidth : null
                }}
            >
                <Paper className={classes.paper}>
                    <TreeView
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                    >
                        {renderTree(treeData)}
                    </TreeView>
                </Paper>
            </Popper>
        </div>
        // <Autocomplete
        //     {...defaultProps}
        //     id="clear-on-escape"
        //     onChange={(e, option) => onChange(option && option.value)}
        //     clearOnEscape
        //     renderInput={params => (
        //         <TextField
        //             {...params}
        //             margin="normal"
        //             fullWidth
        //             InputLabelProps={{ shrink: true }}
        //             label={label}
        //             {...restInput}
        //             helperText={
        //                 showError ? meta.error || meta.submitError : undefined
        //             }
        //         />
        //     )}
        //     {...rest}
        // />
    );
}
