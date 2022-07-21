const axios = require("axios");
require('dotenv').config();

//this is a method to send a post request to a server
//the result of that request is the req object from...
//...router.post("/registration", on the backend...
//...this is returned by getRegistration
const getRegistration = async (data)=>{
    return await axios.post(process.env.service_url, data);
}

module.exports = getRegistration