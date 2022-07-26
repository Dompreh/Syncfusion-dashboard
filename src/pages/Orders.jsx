import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Edit,
  Sort,
  Page,
  Filter,
  ExcelExport,
  PdfExport,
  ContextMenu,
  Resize,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../context/ContextProvider";

function Orders() {
  const { currentMode } = useStateContext()
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 dark:text-white bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header title="Orders" category="Page" />
      <GridComponent
        id="gridComp"
        allowPaging
        dataSource={ordersData}
        allowSorting
        textStyle={{color:`#999999` }}
        contextMenuItems ={contextMenuItems}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Edit,
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
}

export default Orders;
