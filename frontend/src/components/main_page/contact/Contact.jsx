import React, { useState } from 'react'
import { connect } from 'react-redux'
import { sendEmail } from '../../../util/email_util'

function Contact({language, sendEmail}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")

    async function submit(e) {
        e.preventDefault()
        const res = await sendEmail({name, email, msg})
    }
    
    return(
        <div className='contact'>
        <h1>{txts.title[language]}</h1>
            <form id="contact-form" onSubmit={e => submit(e)} method="POST">
                <div className="form-group">
                    <label htmlFor="name">{txts.name[language]}</label>
                    <input id="name" type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input id="email" type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">{txts.msg[language]}</label>
                    <textarea id="msg" className="form-control" rows="5" value={msg} onChange={e => setMsg(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">{txts.submit[language]}</button>
            </form>
        </div>
    )
}

const txts = {
    title: ['Contact Us', 'Entre em contato'],
    name: ['Name', 'Nome'],
    msg: ['Message', 'Mensagem'],
    submit: ['Submit', 'Enviar']
}

const mSTP = state => ({
    language: state.ui.language
})

const mDTP = dispatch => ({
    sendEmail: email => sendEmail(email)
})

export default connect(mSTP, mDTP)(Contact)