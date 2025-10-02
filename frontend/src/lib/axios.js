import axios from "axios";
const api=axios.create({
    baseURL:"http://localhost:5001/api",
    //we are not adding /notes because let say we have to update 
    //let say we hvae /user then we cannot use this 
});
export default api;