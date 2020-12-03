import axios from 'axios';

export const sendEmail = email => {
    axios({
        method: "POST",
        url: "", 
        data: email
    })
}