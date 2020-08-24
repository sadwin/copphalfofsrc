import PrimaryCell from "../../../../../../ui/Table/Cells/PrimaryCell";

export const columns = [
  {
    dataField: "id",
    caption: "ID",
    dataType: "string",
    cellRender: PrimaryCell,
    width: 75
  },
  {
    dataField: "reqnumber",
    caption: "№ заявки",
    dataType: "string",
    cellRender: PrimaryCell,
    width: 80
  },
  {
    dataField: "reqDate",
    caption: "Дата заявки",
    dataType: "string",
    cellRender: PrimaryCell,
    width: 100
  },
  {
    dataField: "reqContent",
    caption: "Запрос",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "orgName",
    caption: "Наименование",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "rolename",
    caption: "Роль в системе",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "region",
    caption: "Регион",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "mo",
    caption: "МО",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "state",
    caption: "Статус",
    dataType: "string",
    cellRender: PrimaryCell
  }
];
