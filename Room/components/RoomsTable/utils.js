import PrimaryCell from "./components/PrimaryCell";

export const columns = [
  {
    dataField: "id",
    caption: "ID",
    dataType: "string",
    cellRender: PrimaryCell,
  },
  {
    dataField: "name",
    caption: "Наименование",
    dataType: "string",
    cellRender: PrimaryCell,
  },
  {
    dataField: "address",
    caption: "Адрес",
    dataType: "string",
    cellRender: PrimaryCell,
  },
  {
    dataField: "orgName",
    caption: "Организация",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "depName",
    caption: "Подразделение",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "number",
    caption: "Номер",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "roomTypeName",
    caption: "Тип",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "area",
    caption: "Площадь",
    dataType: "number",
    cellRender: PrimaryCell
  },
  {
    dataField: "capacity",
    caption: "Вместимость",
    dataType: "number",
    cellRender: PrimaryCell
  }
];
