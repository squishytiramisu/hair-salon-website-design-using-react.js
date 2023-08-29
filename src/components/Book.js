import React,{Component} from 'react';
import {Link} from 'react-router-dom';
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


class Book extends Component{

    state = {
        weekendsVisible: true,
        currentEvents: []
      }

    render(){
        return(
            <div>
<div class="inner-page-banner" id="home">
        <img src="assets/images/ban2.jpg" alt="" class="img-responsive banner-img" />
</div>
<div class="breadcrumb-agile">
	<ol class="breadcrumb mb-0">
		<li class="breadcrumb-item">
        <Link to='/'>Home</Link>
		</li>
		<li class="breadcrumb-item active" aria-current="page">Foglalás</li>
	</ol>
</div>
    <section class="banner-bottom py-1">
        <div class="container py-md-5">
	<h3 class="heading text-center mb-3 mb-sm-5">Saloon Info</h3>
            <div class="single-w3pvt-page mt-md-5 mt-4 px-lg-5">
                <div class="content-sing-w3ls px-lg-5">
                    <img class="img-fluid" src="assets/images/ban3.jpg" alt="" />
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod magna .Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Sed diam nonummy nibh euismod magna .Integer pulvinar leo id viverra feugiat. Pellentesque Libero Justo, Semper At Tempus Vel, Ultrices In Sed Ligula. Nulla Uter Sollicitudin Velit.</p>
                    <p class="mt-3">Integer pulvinar leo id viverra feugiat. Pellentesque Libero Justo, Semper At Tempus Vel, Ultrices In Sed Ligula. Nulla Uter Sollicitudin Velit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod magna.</p>
                    <ul class="w3ls_social_list list-unstyled mt-4">
                        <li class="lead">
                            Catch On Social :
                        </li>
                        <li>
                            <a href="#" class="w3pvt_facebook">
                                <span class="fa fa-facebook-f"></span>
                            </a>
                        </li>
                        <li class="mx-2">
                            <a href="#" class="w3pvt_twitter">
                                <span class="fa fa-twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="w3pvt_dribble">
                                <span class="fa fa-dribbble"></span>
                            </a>
                        </li>
                        <li class="ml-2">
                            <a href="#" class="w3pvt_google">
                                <span class="fa fa-google-plus"></span>
                            </a>
                        </li>
                    </ul>



                </div>
                <div class="row my-lg-5 mt-3 mx-0">
                    <div class="col-lg-6 text-info pl-0">
                        <p>Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor elementum id enim volutpat...</p>
                    </div>
                    <div class="col-lg-6 mt-3 team-img">
                        <div class="row">
                            <div class="col-6">
                                <img src="assets/images/s1.jpg" class="img-fluid" alt="user-image" />
                            </div>
                            <div class="col-6">
                                <img src="assets/images/s2.jpg" class="img-fluid" alt="user-image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='demo-app'>
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
      </div>

                <div class="comment-sec-w3ls">
                    <h4 class="leave-w3ls mb-5">3 Comments</h4>
                    <ul class="list-unstyled">
                        <li class="media">
                            <img class="mr-3 img-fluid" src="assets/images/sb1.jpg" alt="" />

                            <div class="media-body">
                                <h5 class="mt-0 mb-1">John Tyler</h5>
                                <p class="mt-3">Integer pulvinar leo id viverra feugiat. Pellentesque Libero Justo, Semper At Tempus Vel, Ultrices In Sed Ligula. Nulla Uter Sollicitudin Velit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod magna.</p>
                            </div>
                        </li>
                        <li class="media my-5 ml-3">
                            <img class="mr-3 img-fluid" src="assets/images/sb2.jpg" alt="" />
                            <div class="media-body">
                                <h5 class="mt-0 mb-1">Jacke Masito</h5>
                                <p class="mt-3">Integer pulvinar leo id viverra feugiat. Pellentesque Libero Justo, Semper At Tempus Vel, Ultrices In Sed Ligula. Nulla Uter Sollicitudin Velit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod magna.</p>
                            </div>
                        </li>
                        <li class="media ml-5">
                            <img class="mr-3 img-fluid" src="assets/images/sb3.jpg" alt="" />
                            <div class="media-body">
                                <h5 class="mt-0 mb-1">William James</h5>
                                <p class="mt-3">Integer pulvinar leo id viverra feugiat. Pellentesque Libero Justo, Semper At Tempus Vel, Ultrices In Sed Ligula. Nulla Uter Sollicitudin Velit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod magna.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="comment-bottom w3pvt_mail_grid_right p-0 my-lg-5 my-4">
                    <h4 class="leave-w3ls mb-5">Leave a Reply</h4>
                    <form action="#" class="w3ls-contact-fm" method="post">


                        <div class="form-group">
                            <label>Write Message</label>
                            <textarea class="form-control" name="Message" placeholder="" required=""></textarea>
                        </div>
                        <div class="row leave-comment">
                            <div class="col-lg-6 form-group">
                                <label>First Name</label>
                                <input class="form-control" type="text" name="Name" placeholder="" required="" />
                            </div>
                            <div class="col-lg-6 form-group">
                                <label>Email</label>
                                <input class="form-control" type="email" name="Email" placeholder="" required="" />
                            </div>
                        </div>

                        <button type="submit" class="btn read mt-3">Submit</button>
                    </form>
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
        <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
        <i>{event.title}</i>
      </li>
    )
  }
  