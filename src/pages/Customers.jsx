import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Selection,
  Toolbar,
  Edit,
  Sort,
  Inject,
  Page,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../context/ContextProvider";

function Customers() {
  const { currentMode } = useStateContext()
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:text-white dark:bg-secondary-dark-bg">
      <Header title="Customers" category="Page" />
      <GridComponent
        allowPaging
        dataSource={customersData}
        allowSorting
        width="auto"
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
}

export default Customers;
