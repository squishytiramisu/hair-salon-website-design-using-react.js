import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import huLocale from '@fullcalendar/core/locales/hu';
import Api from '../service/api';


const todayStr = new Date().toISOString().replace(/T.*$/, '');

function Book() {
  const [weekendsVisible, setWeekendsVisible] = useState(false);
  const [events, setEvents] = useState([]);
  const [businessHours, setBusinessHours] = useState(null);


  useEffect(() => {
    fetch('https://4f2b9e0d-4998-4c1d-992f-f5daf7f1878a.mock.pstmn.io/api/appointments')
      .then(response => response.json())
      .then(data => setEvents(data));

      Api.getBusinessHours().then((response) => {
        setBusinessHours(response.data);
      });
  }, []);

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  const handleDateSelect = (selectInfo) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: 3,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
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
          <div className="single-w3pvt-page mt-md-5 mt-4 px-lg-5">
            <div className="demo-app">
              <div className="demo-app-main">



                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                  }}
                  businessHours={businessHours}
                  timeZone='Europe/Budapest'
                  locale={huLocale}
                  themeSystem='lux'
                  initialView="timeGridWeek"
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  weekends={weekendsVisible}
                  select={handleDateSelect}
                  eventContent={renderEventContent} // custom render function
                  eventClick={handleEventClick}
                  events={events}
   // called after events are initialized/added/changed/removed
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
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
