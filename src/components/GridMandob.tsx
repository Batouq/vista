import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./Grid.css";
import { ColDef, IGroupCellRendererParams } from "ag-grid-community";
import { MandobData } from "./interfaces";
import { useMemo, useState } from "react";

export default function Grid(props: { database: MandobData[] }) {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const rowHeight = 80;
  const headerHeight = 80;
  const [rowData] = useState<MandobData[]>(props.database);

  const [columnDefs] = useState<ColDef[]>([
    { field: "name", headerName: "اسم المندوب", minWidth: 120 },
    { field: "phoneNumber", headerName: "رقم الجوال", minWidth: 120 },
    { field: "email", headerName: "ايميل", minWidth: 120 },
    {
      field: "takeOrderNumber",
      headerName: "عدد طلبات الاستلام",
      minWidth: 120,
    },
    {
      field: "sendOrderNumber",
      headerName: "عدد طلبات التوصيل",
      minWidth: 120,
    },
    {
      field: "orderPlacement",
      headerName: "",
      minWidth: 150,
      cellRenderer: MoreMandobDetail,
    },
  ]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 100,
    };
  }, []);
  const autoGroupColumnDef = useMemo<ColDef>(() => {
    return {
      headerName: "المنطقة",
      field: "country",
      minWidth: 250,
      cellRenderer: "agGroupCellRenderer",
      cellRendererParams: {
        checkbox: true,
      } as IGroupCellRendererParams,
    };
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className={"ag-theme-quartz"}>
        <AgGridReact<MandobData>
          rowData={rowData}
          headerHeight={headerHeight}
          enableRtl={true}
          rowHeight={rowHeight}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          autoGroupColumnDef={autoGroupColumnDef}
          rowSelection={"multiple"}
          groupSelectsChildren={true}
          suppressRowClickSelection={true}
          suppressAggFuncInHeader={true}
        />
      </div>
    </div>
  );
}

const MoreMandobDetail = (p) => {
  return <div className={"btnMoreMandobDetail"}>...</div>;
};
