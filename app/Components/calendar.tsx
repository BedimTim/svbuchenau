"use client";

import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, addDays, eachWeekOfInterval } from "date-fns";
import { de } from "date-fns/locale/de";

interface Event
{
  date: string;
  title: string;
  description: string;
}

const generateEvents = (year: number, month: number) => {
    
    const events: Event[] = [];
    const monthStart = new Date(year, month, 1);
    const monthEnd = endOfMonth(monthStart);
  
    // Jeden Freitag Training um 19:30
    const fridays = eachDayOfInterval({ start: monthStart, end: monthEnd }).filter(date => getDay(date) === 5);
    fridays.forEach(date => {
      events.push({ date: format(date, "yyyy-MM-dd"), title: "Training 19:30", description: "Reguläres Training im Schützenhaus" });
    });
  
    // Erster Freitag im Monat für Stammtisch
    const firstFriday = addDays(monthStart, (5 - getDay(monthStart) + 7) % 7);
    if (firstFriday.getMonth() === month) {
      events.push({ date: format(firstFriday, "yyyy-MM-dd"), title: "Stammtisch 19:30", description: "Geselliges Beisammensein im Gasthaus" });
    }
  
    return events;
  };
  
  const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 0)); // Startet im Januar 2025
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null); // Zustand für das ausgewählte Event
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
    const events = generateEvents(currentDate.getFullYear(), currentDate.getMonth());
  
    const goToNextMonth = () => {
      setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };
  
    const goToPrevMonth = () => {
      setCurrentDate(prevDate => {
        if (prevDate.getFullYear() === 2025 && prevDate.getMonth() === 0) return prevDate; // Blockiert vor Januar 2025
        return new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
      });
    };
  
    const handleEventClick = (event: Event) => {
      setSelectedEvent(event); // Zeigt das Event im Detail an
    };
  
    return (
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <div className="flex justify-between items-center mb-4">
          <button onClick={goToPrevMonth} className="px-4 py-2 bg-gray-300 rounded" disabled={currentDate.getFullYear() === 2025 && currentDate.getMonth() === 0}>&lt;</button>
          <h2 className="text-xl font-bold">{format(currentDate, "MMMM yyyy", { locale: de })}</h2>
          <button onClick={goToNextMonth} className="px-4 py-2 bg-gray-300 rounded">&gt;</button>
        </div>
        
        <div className="grid grid-cols-7 gap-2 text-center text-sm">
          {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((day) => (
            <div key={day} className="font-bold p-2">{day}</div>
          ))}
          {Array((getDay(monthStart) + 6) % 7).fill(null).map((_, i) => (
            <div key={i} className="invisible">-</div>
          ))}
          {days.map((day) => {
            const eventForDay = events.filter(event => format(new Date(event.date), "yyyy-MM-dd") === format(day, "yyyy-MM-dd"));
            
            return (
              <div key={day.toString()} className="relative border p-4 h-16 flex flex-col items-center text-base">
                
                <span className="text-lg z-30 font-semibold" onClick={() => handleEventClick(eventForDay[0])}>{format(day, "d")}</span>
                {eventForDay.length > 0 && (
                  <div 
                    className="absolute z-20 mb-10 w-8 h-8 rounded-full bg-lime-600 cursor-pointer"
                    onClick={() => handleEventClick(eventForDay[0])} // Event-Click für Details
                  />
                )}
              </div>
            );
          })}
        </div>
        {selectedEvent && (
          <div className="mt-4 p-4 bg-gray-100 rounded ">
            <h3 className="text-xl font-semibold">{selectedEvent.title}</h3>
            <p>{selectedEvent.description}</p>
            <button onClick={() => setSelectedEvent(null)} className="mt-2 px-4 py-2 bg-gray-300 rounded">Schließen</button>
          </div>
        )}
        
      </div>
    );
  };
  
  export default Calendar;