import PrimaryCell from "./components/PrimaryCell/";
import CoordinatesCell from "./components/CoordinatesCell/";
import DepartmentsCell from "./components/DepartmentsCell";

export const columns = [
  {
    dataField: "id",
    caption: "ID",
    dataType: "string",
    cellRender: PrimaryCell,
    width: 75
  },
  {
    dataField: "name",
    caption: "Название",
    dataType: "string",
    cellRender: PrimaryCell,
    width: 180
  },
  {
    dataField: "address",
    caption: "Адрес",
    dataType: "string",
    cellRender: PrimaryCell,
    width: 280
  },
  {
    dataField: "orgName",
    caption: "Организация",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "departments",
    caption: "Подразделения",
    dataType: "string",
    cellRender: DepartmentsCell
  },
  {
    dataField: "longitude",
    caption: "Местоположение",
    dataType: "string",
    cellRender: CoordinatesCell
  },
  {
    dataField: "assign",
    caption: "Назначение",
    dataType: "string",
    cellRender: PrimaryCell
  }
];
