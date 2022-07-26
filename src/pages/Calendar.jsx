import React from 'react'
import { ScheduleComponent, Inject, WorkWeek, Day, Week, DragAndDrop, Month, Agenda, Resize} from "@syncfusion/ej2-react-schedule"

import { DatePickerComponent } from "@syncfusion/ej2-react-calendars"

import { scheduleData } from "../data/dummy"

import { Header } from "../components"
import { useStateContext } from "../context/ContextProvider";

function Calendar() {
  const { currentMode } = useStateContext()
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:text-white dark:bg-secondary-dark-bg">
      <Header category="App" title="Calendar"/>
      <ScheduleComponent height='650px' eventSettings={{dataSource : scheduleData}} 
      selectedDate={new Date(2021, 0, 10)}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject services={[Day, Week, Month, WorkWeek, DragAndDrop, Resize, Agenda]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calendar