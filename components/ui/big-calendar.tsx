"use client"; // Required for Next.js since react-big-calendar is client-side

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import default styles
import { format, parse, startOfWeek, getDay } from "date-fns";
import {enUS} from "date-fns/locale/en-US";
import { useState } from "react";

// Setup localizer using date-fns
const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }), // Monday as start of the week
  getDay,
  locales,
});

export default function BigCalendar() {
  // Sample events
  const [events, setEvents] = useState([
    {
      title: "Meeting",
      start: new Date(),
      end: new Date(),
      allDay: false,
    },
  ]);

  return (
    <div className="flex-grow p-2 bg-white rounded-lg shadow overflow-hidden">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%"}}
      />
    </div>
  );
}
