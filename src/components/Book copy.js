import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

let todayStr = new Date().toISOString().replace(/T.*$/, '');
const INITIAL_EVENTS = [
  {
    id: 1,
    title: 'All-day event',
    start: todayStr
  },
  {
    id: 2,
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  }
]


class Book extends Component {
  
  [events, setEvents] = useState([]);

  useEffect() {
    fetch('https://4f2b9e0d-4998-4c1d-992f-f5daf7f1878a.mock.pstmn.io/api/appointments')
      .then(response => response.json())
      .then(data => setEvents(data));
  }



  state = {
    weekendsVisible: false,
    currentEvents: []
  }

  render() {
    return (
      <div>
        <div class="inner-page-banner" id="home">
          <img src="assets/images/ban2.jpg" alt="" class="img-responsive banner-img" />
        </div>
        <div class="breadcrumb-agile">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <Link to='/'>Nyitólap</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Foglalás</li>
          </ol>
        </div>
        <section class="banner-bottom py-1">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">Foglalás</h3>
            <div class="single-w3pvt-page mt-md-5 mt-4 px-lg-5">
              <div className='demo-app'>
                <div className='demo-app-main'>

                  <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                      left: 'prev,next today',
                      center: 'title',
                      right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    initialView='timeGridWeek'
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={this.state.weekendsVisible}
                    //initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                    select={this.handleDateSelect}
                    eventContent={renderEventContent} // custom render function
                    eventClick={this.handleEventClick}
                    events={events}
                    eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                  /* you can update a remote database when these fire:
                  eventAdd={function(){}}
                  eventChange={function(){}}
                  eventRemove={function(){}}
                  */
                  />
                </div>
              </div>

            </div>


          </div>
        </section>
      </div>
    )
  }


  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: 3,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  handleEventClick = (clickInfo) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }
}
export default Book;






function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
      <i>{event.title}</i>
    </li>
  )
}
