import axios from 'axios';

const apiUrl = "https://localhost:7222"


const getBusinessHours = () => {
    return axios.get(`${apiUrl}/api/Values/businessHours`);
}


const Api = {
    getBusinessHours
}



export default Api