import React, { useState, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./Calender.css";
import useCalender from "../../store/Calender";
import { createEventId } from "../../data/data";

const Calender = () => {
  const { currentEvents, setCurrentEvents } = useCalender();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEvents = useCallback(
    async (events) => {
      setCurrentEvents(events);
    },
    [setCurrentEvents]
  );

  const handleDataSelect = useCallback((selectInfo) => {
    const title = window.prompt("Please enter the title for the event");
    if (!title) return;

    selectInfo.view.calendar.unselect();
    selectInfo.view.calendar.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.start,
      end: selectInfo.end,
      allDay: selectInfo.allDay,
    });
  }, []);

  const handleEventClick = useCallback((clickInfo) => {
    if (window.confirm("Are you sure you want to delete it?")) {
      clickInfo.event.remove();
    }
  }, []);

  return (
    <div className="calender-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        allDaySlot={false}
        initialView="timeGridWeek"
        slotDuration="01:00:00"
        editable
        selectable
        selectMirror
        dateMaxEvents
        weekends
        nowIndicator
        initialEvents={currentEvents}
        eventsSet={handleEvents}
        select={handleDataSelect}
        eventClick={handleEventClick}
      />
    </div>
  );
};

export default Calender;
