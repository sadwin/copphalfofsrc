import PrimaryCell from "../../../../../ui/Table/Cells/PrimaryCell";

export const columns = [
  {
    dataField: "id",
    caption: "ID",
    dataType: "string",
    cellRender: PrimaryCell,
    width: 75
  },
  {
    dataField: "orderNumber",
    caption: "Номер",
    dataType: "string",
    cellRender: PrimaryCell,
    width: 80
  },
  {
    dataField: "orderDate",
    caption: "Сформирован",
    dataType: "string",
    cellRender: PrimaryCell,
    width: 100
  },
  {
    dataField: "orderType",
    caption: "Вид заказа",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "orgName",
    caption: "Заказчик",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "modifiedDate",
    caption: "Последнее обновление",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "state",
    caption: "Статус",
    dataType: "string",
    cellRender: PrimaryCell,
    width: 80
  }
];
