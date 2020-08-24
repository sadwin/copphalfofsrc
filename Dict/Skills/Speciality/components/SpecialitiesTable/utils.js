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
    dataField: "groupCode",
    caption: "Код группы",
    dataType: "string",
    cellRender: PrimaryCell,
    width: 180,
  },
  {
    dataField: "groupName",
    caption: "Наименование группы",
    dataType: "string",
    cellRender: PrimaryCell,
    width: 280,
  },
  {
    dataField: "code",
    caption: "Код",
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
    dataField: "profession",
    caption: "Тип",
    dataType: "string",
    cellRender: ProffesionCell,
  },
  {
    dataField: "createDate",
    caption: "Дата добавления",
    dataType: "string",
    cellRender: PrimaryCell,
  }
];

