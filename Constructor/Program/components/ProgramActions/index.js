import React from "react";
import SquareButton from "../../../../ui/SquareButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  menuStyles: {
    "& ul": {
      padding: 0
    },
    "& > .MuiPaper-root": {
      top: "170px !important"
    },
    padding: 0
  },
  itemStyles: {
    fontSize: "12px",
    padding: "17px"
  }
});

const ProgramActions = ({ actions }) => {
  const { menuStyles, itemStyles } = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (action) => {
    setAnchorEl(null);
    typeof action === 'function' && action();
  };

  return (
    <div>
      <SquareButton onClick={handleClick}>
        <MoreVertIcon fontSize="small" />
      </SquareButton>
      <Menu
        className={menuStyles}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {actions.map(({ label, onClick, disabled }) => (
          <MenuItem
            key={label}
            onClick={() => handleClose(onClick)}
            className={itemStyles}
            disabled={disabled}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ProgramActions;
