import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import { AgGridReact } from "ag-grid-react";
import { ITableProps } from "./Table.types";

const Table = ({
  columns,
  rows,
  columnDefaultConfig,
  tableConfig,
}: ITableProps) => {
  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: 1000 }}>
      <AgGridReact
        rowData={rows}
        columnDefs={columns}
        defaultColDef={columnDefaultConfig}
        {...tableConfig}
      />
    </div>
  );
};

export default Table;
