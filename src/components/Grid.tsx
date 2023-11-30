import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./Grid.css";
import { ColDef, IGroupCellRendererParams } from "ag-grid-community";
import { OrderData } from "./interfaces";
import { useMemo, useState } from "react";

export default function Grid(props: { database: OrderData[] }) {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const rowHeight = 80;
  const headerHeight = 80;
  const [rowData] = useState<OrderData[]>(props.database);
  
  const [columnDefs] = useState<ColDef[]>([
    { field: "country", rowGroup: true, hide: true },
    { field: "orderNumber", headerName: "رقم الطلب", minWidth: 120 },
    { field: "orderDate", headerName: "تاريخ الطلب", minWidth: 120 },
    { field: "sellerNumber", headerName: "رقم التاجر", minWidth: 120 },
    { field: "dropLocation", headerName: "مكان الاستلام", minWidth: 120 },
    { field: "driverMandob", headerName: "المندوب", minWidth: 120 },
    { field: "lastUpdate", headerName: "اخر تحديث", maxWidth: 120 },
    {
      field: "orderStatus",
      headerName: "حاله الطلب",
      minWidth: 150,
      cellRenderer: BtnStatus,
    },
    {
      field: "orderPlacement",
      headerName: "اسناد الطلب",
      minWidth: 150,
      cellRenderer: BtnPlacment,
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
        <AgGridReact<OrderData>
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

const BtnStatus = (p) => {
  const statusValues = {
    undefined: { backgroundColor: "transparent", color: "transparent" },
    review: { backgroundColor: "#E7E7E7", color: "#3D3D3D" },
    sending: { backgroundColor: "#FEEAC7", color: "#F3790D" },
    process: { backgroundColor: "#F3F7FC", color: "#3780C0" },
  };
  const statusValuesString = {
    undefined: " ",
    review: "تحت المراجعة",
    sending: "جاري الاستلام",
    process: "في مركز الفرز",
  };

  return (
    <div className={"btnStatus"} style={statusValues[p.value]}>
      {statusValuesString[p.value]}
    </div>
  );
};

const BtnPlacment = (p) => {
  const placementStatus = {
    undefined: { backgroundColor: "transparent", color: "transparent" },
  };
  return (
    <div className={"btnPlacment"} style={placementStatus[p.value]}>
      اسناد
    </div>
  );
};
