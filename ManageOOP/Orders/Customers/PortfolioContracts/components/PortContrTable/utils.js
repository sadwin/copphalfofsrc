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
    dataField: "orgName",
    caption: "Заказчик",
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
    dataField: "contacts",
    caption: "Контакты",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "address",
    caption: "Юридический адрес",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "orderscount",
    caption: "Принято заказов",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "regInfo",
    caption: "Регистрация",
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
