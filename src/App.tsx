import Table from "./components/Table";

const rows = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Toyota", model: "Testi", price: 31000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxster", price: 72000 },
];

const columns = [{ field: "make" }, { field: "model" }, { field: "price" }];

const columnDefaultConfig = {
  sortable: true,
  filter: true,
  resizable: true,
  floatingFilter: true,
  enableRowGroup: true, // only enterprise
};

const tableConfig = {
  animateRows: true,
  enableRangeSelection: true,
  rowGroupPanelShow: "always",
  sideBar: "filters",
  pagination: true,
  paginationPageSize: 2,
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
