export const tableConfig = {
  columns: [
    { field: "group", rowGroup: true, hide: true },
    { field: "title" },
    { field: "released" },
  ],
  rows: [
    { group: "Demon Slayer", title: "Demon Slayer", released: 2010 },
    { group: "Demon Slayer", title: "Demon Slayer 2", released: 2015 },
    { group: "Naruto", title: "Naruto", released: 2020 },
    { group: "One Piece", title: "One Piece", released: 2022 },
  ],
  columnDefaultConfig: {
    sortable: true,
    filter: true,
    resizable: true,
    enableRowGroup: true,
    editable: true,
  },
  tableConfig: {
    animateRows: true,
    enableRangeSelection: true,
    rowGroupPanelShow: "always",
    sideBar: "always",
    pagination: true,
    paginationPageSize: 30,
  },
};
