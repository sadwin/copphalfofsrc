import PrimaryCell from "../../../../ui/Table/Cells/PrimaryCell";

export const columns = [
  {
    dataField: "id",
    caption: "ID",
    dataType: "string",
    cellRender: PrimaryCell,
    width: 75
  },
  {
    dataField: "code",
    caption: "Код",
    dataType: "string",
    cellRender: PrimaryCell,
    width: 80
  },
  {
    dataField: "programName",
    caption: "Наименование",
    dataType: "string",
    cellRender: PrimaryCell,
    width: 280
  },
  {
    dataField: "ownerName",
    caption: "Правообладатель",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "state",
    caption: "Статус",
    dataType: "string",
    cellRender: PrimaryCell,
    width: 80
  },
  {
    dataField: "authors",
    caption: "Составители",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "competence",
    caption: "Компетенция",
    dataType: "string",
    cellRender: PrimaryCell
  },
  {
    dataField: "speciality",
    caption: "Профессия/Специальность",
    dataType: "string",
    cellRender: PrimaryCell
  }
];
