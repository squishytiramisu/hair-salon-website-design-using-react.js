
import axios from 'axios';

const apiUrl = "https://timibookingapi20230903014847.azurewebsites.net"


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

const sendMail = (name,email,message) => {
    return axios.post(`${apiUrl}/api/Booking/sendMail`,{"name":name,"email":email,"message":message});
}

const addEvent = (selectedDate,selectedService,selectedTime,duration,fullname,phone) => {
    // Convert the DateTime object to a UTC string
    const utcDateString = new Date(selectedDate).toISOString().replace("00:00:",selectedTime+":");



    return axios.post(`${apiUrl}/api/Booking/addEvent`,
        {"name":fullname,
        "start": utcDateString,
        "duration": duration,
        "phoneNumber": phone,
        "service":selectedService});

}

const Api = {
    getBusinessHours,
    getEvents,
    getServices,
    getFreeSlots,
    addEvent,
    sendMail
}



export default Api