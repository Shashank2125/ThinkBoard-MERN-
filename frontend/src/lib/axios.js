import axios from "axios";
//in production there is no loal host to make our domain dynamic we do this
const Base_URL=import.meta.env.MODE=="development"?"http://localhost:5001/api" :"/api"
const api=axios.create({
    baseURL: Base_URL,
    //we are not adding /notes because let say we have to update 
    //let say we hvae /user then we cannot use this 
});

export default api;