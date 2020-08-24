import React from 'react';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SquareButton from "../ui/SquareButton";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from '@material-ui/core';
import './ReferenceTable.css';

const options = [
  "Удалить выбранные",
  "Экспортировать выбранные",
  "Экспортировать все",
  "Выбор видимых столбцов"
];

const useStyles = makeStyles(theme => ({
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
  },
}));

const SubMenu = ({ actions }) => {
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
      <SquareButton onClick={handleClick} class="subBtn">
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

export default SubMenu;
