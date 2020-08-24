import React from "react";
import Toolbar, { Start, End } from "../../ui/Toolbar";

import SquareButton from "../../ui/SquareButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import CachedIcon from "@material-ui/icons/Cached";
import Button from "../../ui/Button";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/styles";
import { classes } from "istanbul-lib-coverage";

const styles = theme => ({
  root: {
    margin: `0 ${theme.spacing(2)}px`,
    padding: theme.spacing()
  },
  button: {
    marginLeft: theme.spacing()
  }
});

class PersonViewToolbarImpl extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleGoBackClick = this.handleGoBackClick.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.renderBackButton = this.renderBackButton.bind(this);
    this.renderRefreshButton = this.renderRefreshButton.bind(this);
    this.renderSaveButton = this.renderSaveButton.bind(this);
  }

  handleGoBackClick() {
    this.props.history.push("/work/app/person");
  }

  handleRefreshClick() {
    let { refreshData } = this.props;
    refreshData();
  }

  handleSaveClick() {
    let { saveData } = this.props;
    saveData();
  }

  renderBackButton() {
    const { classes } = this.props;
    return (
      <SquareButton
        onClick={this.handleGoBackClick}
        classes={{ root: classes.button }}
      >
        <ChevronLeftIcon fontSize="small"/>
      </SquareButton>
    );
  }

  renderRefreshButton() {
    const { classes } = this.props;
    return (
      <SquareButton
        onClick={this.handleRefreshClick}
        classes={{ root: classes.button }}
      >
        <CachedIcon  fontSize="small"/>
      </SquareButton>
    );
  }

  renderSaveButton() {
    const { classes } = this.props;
    const { saveDisabled } = this.props;
    return (
      <Button color="green" disabled={saveDisabled}>
        Сохранить
      </Button>
    );
  }

  renderMoreMenu = () => {
    const { classes } = this.props;
    const MoreMenu = () => {
      const [anchorEl, setAnchorEl] = React.useState(null);

      const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };

      const handleDelete = () => {
        // const { confirmAction } = this.props;
        // const grid = this.gridRef.current.instance;
        // const rowKeys = grid.getSelectedRowKeys();
        // confirmAction({ action: deletePerson(rowKeys), message: "Удалить выбранных сотрудников?" });
      };

      const handleBlock = () => {
        // const { confirmAction } = this.props;
        // const grid = this.gridRef.current.instance;
        // const rowKeys = grid.getSelectedRowKeys();
        // confirmAction({ action: deletePerson(rowKeys), message: "Удалить выбранных сотрудников?" });
      };

      return (
        <div>
          <SquareButton
            aria-label="Menu"
            onClick={handleClick}
            size="small"
            classes={{ root: classes.button }}
          >
            <MoreVertIcon fontSize="small" />
          </SquareButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            transformOrigin={{
              vertical: -42,
              horizontal: "left"
            }}
          >
            <MenuItem onClick={handleDelete}>Удалить сотрудника</MenuItem>
            <MenuItem onClick={handleBlock}>Заблокировать сотрудника</MenuItem>
          </Menu>
        </div>
      );
    };

    return <MoreMenu />;
  };

  render() {
    const { classes } = this.props;
    return (
      <Toolbar className={classes.root}>
        <Start>
          {this.renderBackButton()}
          {this.renderRefreshButton()}
        </Start>
        <End>
          {this.renderSaveButton()}
          {this.renderMoreMenu()}
        </End>
      </Toolbar>
    );
  }
}

export default withStyles(styles)(PersonViewToolbarImpl);
