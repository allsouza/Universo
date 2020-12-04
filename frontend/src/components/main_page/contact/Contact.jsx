import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { sendEmail } from '../../../util/email_util'

function Contact({language, sendEmail}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    const [status, setStatus] = useState("")
    const [send, setSend] = useState(false)
    const history = useHistory()

    useEffect(() => {
        setSend(Boolean(name && email && msg))
    }, [name, email, msg])

    async function submit(e) {
        e.preventDefault()
        setStatus('sending')
        const res = await sendEmail({name, email, msg})
        setStatus(res.data.status)
    }

    function contactForm() {
        return(
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
                <button type="submit" disabled={!send} className="btn btn-primary">{txts.submit[language]}</button>
            </form>
        )
    }

    function success() {
        return(
            <div className="success">
                <h1>{txts.success[language]}</h1>
                <button onClick={() => history.push('/')}>{txts.back[language]}</button>
            </div>
        )
    }

    function sending() {
        return(
            <div>
                <h2>{txts.sending[language]}</h2>
            </div>
        )
    }

    function error() {
        return (
            <div className='error'>
                <p>{txts.error[language]}</p>
                {contactForm()}
            </div>
        )
    }

    function stage() {
        if(status === 'sending'){
            return sending()
        }
        else if(status === 'success'){
            return success()
        }
        else{
            if(status === 'fail'){
                return error()
            }
            else{
                return contactForm()
            }
        }
    }
    
    return(
        <div className='contact'>
        <h1>{txts.title[language]}</h1>
            {stage()}
        </div>
    )
}

const txts = {
    title: ['Contact Us', 'Entre em contato'],
    name: ['Name', 'Nome'],
    msg: ['Message', 'Mensagem'],
    submit: ['Submit', 'Enviar'],
    sending: ['Sending email', 'Enviando email'],
    success: ['Message successfully sent!', 'Mensagem enviada com sucesso!'],
    back: ['Back to main', 'Voltar a página principal'],
    error: ['There was an error sending your message, please try again later or send an email directly to clubeuniversousa@gmail.com. Thanks!',
            'Ouve um erro no envio da mensagem, por favor tente novamente mais tarde ou manda uma mensagem direto para clubeuniversousa@gmail.com. Obridado!']
}

const mSTP = state => ({
    language: state.ui.language
})

const mDTP = dispatch => ({
    sendEmail: email => sendEmail(email)
})

export default connect(mSTP, mDTP)(Contact)