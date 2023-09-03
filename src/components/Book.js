import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import huLocale from '@fullcalendar/core/locales/hu';
import Api from '../service/api';
import Demo from './FormDialog';


const todayStr = new Date().toISOString().replace(/T.*$/, '');

function Book() {
  const [events, setEvents] = useState([]);
  const [businessHours, setBusinessHours] = useState(null);


  const childRef = useRef();

  const [dialogOpen, setDialogOpen] = useState(false);

  const [date, setDate] = useState("");

  useEffect(() => {
      Api.getBusinessHours().then((response) => {
        setBusinessHours(response.data);
      });

      Api.getEvents().then((response) => {
        setEvents(response.data);
      });

  }, []);


const addedEvent = (newEvents) => {
  var allEvent = events.concat(newEvents);
  setEvents(allEvent);
}


  const handleDateClicked = (e) => {

    if(childRef.current !== null && childRef.current !== undefined){
      childRef.current.openDialog();
    }

    console.log(e);
    if(e==null || e == undefined || e.view == undefined || e.view.type == undefined || e.dateStr == undefined){
      return;
    }
    if(e.view.type === 'dayGridMonth') {
      e.view.calendar.changeView('timeGridWeek', e.dateStr);
    }
    if(e.view.type === 'timeGridWeek') {
      setDate(e.dateStr.split('T')[0]);
      setDialogOpen(true);
    }
  };

  const handleEventClicked = (e) => {
    e.view.calendar.changeView('timeGridWeek', e.event.startStr);
  };

  

  return (
    <div>
      <div className="inner-page-banner" id="home">
        <img src="assets/images/ban2.jpg" alt="" className="img-responsive banner-img" />
      </div>
      <div className="breadcrumb-agile">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Nyitólap</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Foglalás</li>
        </ol>
      </div>
      <section className="banner-bottom py-1">
        <div className="container py-md-5">
          <h3 className="heading text-center mb-3 mb-sm-5">Foglalás</h3>

              <Demo open={dialogOpen} date={date} addedEvent={addedEvent}/>
          <div className="single-w3pvt-page mt-md-5 mt-4 px-lg-5">
            <div className="demo-app">


              <div className="demo-app-main">

                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek',
                  }}
                  businessHours={businessHours}
                  slotMinTime="08:00:00"
                  slotMaxTime="20:00:00"
                  timeZone='Europe/Budapest'
                  locale={huLocale}
                  themeSystem='bootstrap'
                  initialView="dayGridMonth"
                  editable={false}
                  allDaySlot={false}
                  selectable={false}
                  selectMirror={true}
                  dayMaxEvents={true}
                  weekends={false}
                  nowIndicator={true}
                  eventClick={(e) => handleEventClicked(e)}
                  //eventContent={renderEventContent} // custom render function
                  events={events}
                  dateClick={(e) => handleDateClicked(e)}
                />
                

              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Book;

function renderEventContent(eventInfo) {
  return (
    <>
    </>
  );
}
