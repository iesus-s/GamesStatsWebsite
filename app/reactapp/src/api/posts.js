import axios from "axios";


//This needs to change when we go to django
export default axios.create({
    baseURL: 'http://localhost:8000'
})