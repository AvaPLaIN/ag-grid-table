export interface ITableProps {
  columns: { [key: string]: string }[];
  rows: { [key: string]: string | number }[];
  columnDefaultConfig?: ColumnDefConfig;
  tableConfig: TableConfig;
}

type ColumnDefConfig = {
  sortable?: boolean;
  filter?: boolean;
  resizable?: boolean;
  floatingFilter?: boolean;
  enableRowGroup?: boolean;
};

type TableConfig = {
  animateRows?: boolean;
  enableRangeSelection?: boolean;
  rowGroupPanelShow?: string;
  sideBar?: string;
  pagination?: boolean;
  paginationPageSize?: number;
};
