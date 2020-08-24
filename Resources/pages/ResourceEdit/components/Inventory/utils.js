import PrimaryCell from "./components/PrimaryCell";

export const columns = [
  {
    dataField: "id",
    caption: "ID",
    dataType: "string",
    cellRender: PrimaryCell,
  },
  {
    dataField: "inventoryNumber",
    caption: "Инвент. номер",
    dataType: "string",
    cellRender: PrimaryCell,
  },
  {
    dataField: "resourceTypeName",
    caption: "Вид ресурса",
    dataType: "string",
    cellRender: PrimaryCell,
  },
  {
    dataField: "name",
    caption: "Наименование",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "model",
    caption: "Модель",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "manufacture",
    caption: "Производитель",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "unitName",
    caption: "Ед. изм",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "count",
    caption: "Кол-во",
    dataType: "number",
    cellRender: PrimaryCell
  },
  {
    dataField: "yearStart",
    caption: "Год выпуска",
    dataType: "number",
    cellRender: PrimaryCell
  },
  {
    dataField: "dateOut",
    caption: "Выведен из эксплуатации",
    dataType: "string",
    cellRender: PrimaryCell
  },
];
