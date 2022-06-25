import Table from "./components/Table";

const rows = [
  { group: "Demon Slayer", title: "Demon Slayer", released: 2010 },
  { group: "Demon Slayer", title: "Demon Slayer 2", released: 2015 },
  { group: "Naruto", title: "Naruto", released: 2020 },
  { group: "One Piece", title: "One Piece", released: 2022 },
];

const columns = [
  { field: "group", rowGroup: true, hide: true },
  { field: "title" },
  { field: "released" },
];

const columnDefaultConfig = {
  sortable: true,
  filter: true,
  resizable: true,
  floatingFilter: true,
  enableRowGroup: true,
};

const tableConfig = {
  animateRows: true,
  enableRangeSelection: true,
  rowGroupPanelShow: "always",
  sideBar: "filters",
  pagination: true,
  paginationPageSize: 10,
};

function App() {
  return (
    <Table
      columns={columns}
      rows={rows}
      columnDefaultConfig={columnDefaultConfig}
      tableConfig={tableConfig}
    ></Table>
  );
}

export default App;
