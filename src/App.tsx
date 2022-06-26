import Table from "./components/Table";
import { tableConfig } from "./data/tableConfig";

function App() {
  return (
    <Table
      columns={tableConfig.columns}
      rows={tableConfig.rows}
      columnDefaultConfig={tableConfig.columnDefaultConfig}
      tableConfig={tableConfig.tableConfig}
    ></Table>
  );
}

export default App;
