
import axios from 'axios';


const { DateTime } = require('luxon');



const apiUrl = "https://localhost:7222"


const getBusinessHours = () => {
    return axios.get(`${apiUrl}/api/Values/businessHours`);
}

const getEvents = () => {
    return axios.get(`${apiUrl}/api/booking/events`);
}

const getServices = () => {
    return axios.get(`${apiUrl}/api/Values/services`);
}

const getFreeSlots = (date,duration) => {

    // Convert the DateTime object to a UTC string
    const utcDateString = new Date(date).toISOString();


    return axios.post(`${apiUrl}/api/Booking/freeSlots`,{"date":utcDateString,"serviceDuration":duration});
}

const Api = {
    getBusinessHours,
    getEvents,
    getServices,
    getFreeSlots
}



export default Api