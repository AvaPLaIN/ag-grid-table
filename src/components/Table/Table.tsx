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
  const handleOnCellValueChanged = (e: any) => {
    console.log(e.data);
    // update(e.data.id, e.data)
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: 1000 }}>
      <AgGridReact
        rowData={rows}
        columnDefs={columns}
        defaultColDef={columnDefaultConfig}
        {...tableConfig}
        onCellValueChanged={handleOnCellValueChanged}
      />
    </div>
  );
};

export default Table;
