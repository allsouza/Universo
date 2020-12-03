import axios from 'axios';

export const sendEmail = email => {
    return axios.post("/api/email/send/", email)
}