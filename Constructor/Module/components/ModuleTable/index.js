import React from "react";
import { connect } from "react-redux";

import DataGrid, {
  Column,
  LoadPanel,
  Scrolling,
  FilterRow,
  Selection
} from "devextreme-react/data-grid";
import OutsideClickHandler from "react-outside-click-handler";
import CachedIcon from "@material-ui/icons/Cached";
import { withStyles } from "@material-ui/core/styles";

import { columns } from "./utils";
import SquareButton from "../../../../ui/SquareButton";
import SearchField from "../../../../ui/SearchField";
import ModuleActions from "../ModuleActions";
import Box from "../../../../ui/Box";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    "& #gridContainer": {
      height: "calc(100vh - 200px)"
    }
  },
  controls: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px",
    "& > div": {
      display: "flex",
      alignItems: "flex-end",
      "& > *:not(:nth-last-child(1))": {
        marginRight: "14px"
      }
    }
  }
};

class ModuleTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    const { root, moduleContainer, controls } = classes;

    const moduleActions = [
      {
        label: "Удалить выбранные",
        disabled: true
      },
      {
        label: "Экспортировать выбранные",
        disabled: true
      },
      {
        label: "Экспортировать все",
        disabled: true
      },
      {
        label: "Выбор видимых столбцов",
        disabled: true
      }
    ];

    return (
      <div className={root}>
        <Box>
          <div className={controls}>
            <div>
              <SquareButton>
                <CachedIcon fontSize="small"/>
              </SquareButton>
              <SearchField width={400} />
            </div>
            <div>
              <ModuleActions actions={moduleActions} />
            </div>
          </div>
          <div>
            <DataGrid
              elementAttr={{
                id: "gridContainer"
              }}
              ref={this.dataGridRef}
              wordWrapEnabled={true}
              focusedRowEnabled
              errorRowEnabled={false}
              showBorders
            >
              <Selection
                mode="multiple"
                showCheckBoxesMode="onClick"
                showBorders={true}
                width={120}
              />
              {columns.map(column => (
                <Column key={column.dataField} {...column} />
              ))}
              <FilterRow visible={true} />
              <Scrolling mode="virtual" />
              <LoadPanel enabled />
            </DataGrid>
          </div>
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(ModuleTable);