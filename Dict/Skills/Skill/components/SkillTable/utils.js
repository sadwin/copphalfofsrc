import PrimaryCell from './components/PrimaryCell';
import ProffesionCell from './components/ProffesionCell';

export const columns = [
  {
    dataField: "id",
    caption: "ID",
    dataType: "string",
    cellRender: PrimaryCell,
    width: 75,
  },
  {
    dataField: "code",
    caption: "Код",
    dataType: "string",
    cellRender: PrimaryCell,
  },
  {
    dataField: "name",
    caption: "Название",
    dataType: "string",
    cellRender: PrimaryCell,
  },
  {
    dataField: "categoryName",
    caption: "Блок",
    dataType: "string",
    cellRender: PrimaryCell,
  },
  {
    dataField: "typeName",
    caption: "Тип",
    dataType: "string",
    cellRender: PrimaryCell,
  },
  {
    dataField: "sourceTypeName",
    caption: "Источник",
    dataType: "string",
    cellRender: PrimaryCell,
  },
  {
    dataField: "publishDate",
    caption: "Дата публикации",
    dataType: "string",
    cellRender: PrimaryCell,
  }
];

