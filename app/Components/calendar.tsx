"use client";

import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, addDays, eachWeekOfInterval } from "date-fns";
import { de } from "date-fns/locale/de";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface Event
{
  date: string;
  title: string;
  description: string;
  color: string;
}

const detailVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const isToday = (day: Date) => format(day, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");


const generateEvents = (year: number, month: number) => {
    
    const events: Event[] = [];
    const monthStart = new Date(year, month, 1);
    const monthEnd = endOfMonth(monthStart);
  
    // Jeden Freitag Training um 19:30
    const fridays = eachDayOfInterval({ start: monthStart, end: monthEnd }).filter(date => getDay(date) === 5);
    fridays.forEach(date => {
      events.push({ date: format(date, "yyyy-MM-dd"), title: "Training 19:30", description: "Reguläres Training im Schützenhaus", color: "bg-blue-500" });
    });
  
    // Erster Freitag im Monat für Stammtisch
    const firstFriday = addDays(monthStart, (5 - getDay(monthStart) + 7) % 7);
    if (firstFriday.getMonth() === month) {
      events.push({ date: format(firstFriday, "yyyy-MM-dd"), title: "Stammtisch 20:00", description: "Dorfabend", color: "bg-red-400" });
    }
    
    if (month === 0) { // Monat 0 = Januar
      events.push({ date: `${year}-01-01`, title: "Neujahrspokalschießen 15:00", description: "Ausschießen des Neujahrspokals", color: "bg-red-500" });
    }

    // Rundenwettkämpfe
    const colorWk = "bg-yellow-500";
    events.push({ date: "2025-02-03", title: "LG Auflage", description: "In Mackenzell", color: colorWk });
    events.push({ date: "2025-02-07", title: "RWK LG 20:00", description: "Heimkampf gegen Roßbach 2", color: colorWk });
    events.push({ date: "2025-02-08", title: "Bezirksmeisterschaft LG", description: "Junioren 1+2 in Mittelkalbach", color: colorWk });
    events.push({ date: "2025-02-16", title: "Bezirksmeisterschaft LG Auflage", description: "Alle Klassen in Petersberg", color: colorWk });
    events.push({ date: "2025-02-21", title: "RWK LG 20:00", description: "Heimkampf gegen Morles 3", color: colorWk });
    events.push({ date: "2025-02-23", title: "Bezirksmeisterschaft LP", description: "Alle Klassen in Mackenzell", color: colorWk });
    events.push({ date: "2025-03-07", title: "RWK LG 20:00", description: "Auswärts gegen Leibolz 3", color: colorWk });
    events.push({ date: "2025-03-20", title: "RWK LG 20:00", description: "Auswärts gegen Arzell 2", color: colorWk });

    const colorVs = "bg-red-500";
    events.push({ date: "2025-03-21", title: "Jahreshauptversammlung 20:00", description: "SV Buchenau/Giesenhain", color: colorVs });
    events.push({ date: "2025-03-26", title: "Bezirksversammlung 19:00", description: "In Petersberg", color: colorVs });
    events.push({ date: "2025-03-28", title: "König- und Pokalschießen 19:30", description: "Ausschießen von Königspaar und Pokalen", color: colorVs });
    events.push({ date: "2025-04-11", title: "Hessischer Schützentag", description: "In Baunatal", color: colorVs });
    events.push({ date: "2025-04-12", title: "Hessischer Schützentag", description: "In Baunatal", color: colorVs });
    events.push({ date: "2025-04-13", title: "Hessischer Schützentag", description: "In Baunatal", color: colorVs });

    const colorJg = "bg-lime-600";
    events.push({ date: "2025-06-09", title: "Schützenfest", description: "In Nüsterrasen", color: colorJg });
    events.push({ date: "2025-07-13", title: "Bezirksschützenfest", description: "In Traisbach", color: colorJg });

    return events;
  };
  
  const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date()); // Startet im Januar 2025
    const [selectedEvents, setSelectedEvents] = useState<Event[]>([]); // Zustand für das ausgewählte Event
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
  
    const handleEventClick = (eventsForDay: Event[]) => {
      setSelectedEvents(eventsForDay); // Zeigt das Event im Detail an
    };
  
    return (
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <button 
                  onClick={() => setCurrentDate(new Date())} 
                  className="px-4 py-2 ml-0 bg-gray-300 hover:bg-gray-400 duration-200  rounded-large"
          >
                Heute
          </button>
        <div className="flex justify-between items-center mb-4">
          <button onClick={goToPrevMonth} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 duration-200 rounded-large" disabled={currentDate.getFullYear() === 2025 && currentDate.getMonth() === 0}>&lt;</button>
          

          <motion.div
              key={currentDate.toString()}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
          >
              <h2 className="text-xl font-bold">{format(currentDate, "MMMM yyyy", { locale: de })}</h2>
          </motion.div>
          
          <button onClick={goToNextMonth} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 duration-200 rounded-large">&gt;</button>
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
              <div key={day.toString()} className={clsx("relative p-4 h-16 flex flex-col hover:bg-opacity-60 hover:bg-gray-300 hover:rounded-large duration-100 items-center text-base cursor-pointer", isToday(day) && "bg-orange-300 bg-opacity-65 rounded-large font-bold")} onClick={() => handleEventClick(eventForDay)}>
                
                <span className="text-lg z-30   font-semibold">{format(day, "d")}</span>
                {eventForDay.length > 0 && (
                  <div 
                    className="absolute top-1 left-1/2 -translate-x-1/2 flex gap-1 justify-center z-20 cursor-pointer"
                     // Event-Click für Details
                  >
                    {eventForDay.map((event, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${event.color} cursor-pointer`}
                      title={event.title}
                    />
                  ))}

                  </div>
                )}
              </div>
            );
          })}
        </div>
        {selectedEvents.length > 0 && (
  <motion.div 
    className="mt-4 p-4 bg-gray-100 rounded shadow-lg"
    initial="hidden"
    animate="visible"
    
    exit="hidden"
    variants={detailVariants}
  >
    <h3 className="text-xl font-semibold">
      Events am {format(new Date(selectedEvents[0].date), "dd.MM.yyyy")}
    </h3>
    <ul>
      {selectedEvents.map((event, index) => (
        <li key={index} className="mt-2">
          <span className={`w-3 h-3 rounded-full inline-block ${event.color} mr-2`} />
          <strong>{event.title}</strong>: {event.description}
        </li>
      ))}
    </ul>
    <button onClick={() => setSelectedEvents([])} className="mt-2 px-4 py-2 bg-gray-300 rounded-large hover:bg-gray-400 duration-200">
      Schließen
    </button>
  </motion.div>
)}
        
      </div>
    );
  };
  
  export default Calendar;