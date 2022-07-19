import React from "react";
import { calendarContainer } from "./calendar.style";

export const Calendar = ({ className = "" }) => {
  return (
    <div className={`${className}`} style={calendarContainer}>
      Calendar
    </div>
  );
};
