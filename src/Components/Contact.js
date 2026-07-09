import React, { useRef, useState } from 'react'
import { Container,Spinner } from 'react-bootstrap'
import '../Styles/Contact.css'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function Contact() {

  const form = useRef();
  const[loading,setLoading] = useState(false)

  const handlesubmit=(e)=>{
    e.preventDefault()

    const email = form.current.email.value;
    const sub = form.current.subject.value;
    const msg = form.current.message.value;

    if(!email || !sub || !msg)
    {
      toast.error("All fields are required",{
        autoClose:1300
      });
      return; // Exit the function if validation fails
    }
    setLoading(true)

    emailjs.sendForm(
      "service_o8fm72b",
      "template_az5ol3e",
      form.current,
      "tv9wka3K3PZ4-fuaV"
    )
    .then((result)=>{
      setLoading(false)
      toast.success("Email sent successfully",{
        autoClose:1300
      });
      form.current.reset();
    }).catch((error)=>{
      setLoading(false)
     toast.error("Failed to send message",{
      autoClose:1300
    });
    })
  }
  return (
    <Container fluid id='contact' className='container-one'>
      <Container>
      <h2 className="contact-form-title main-title">CONTACT</h2>
      <div className="contact-form-container">

      <form className="contact-form" ref={form} onSubmit={handlesubmit}>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name='email' placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name='subject' placeholder="Subject" autoComplete='off' />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name='message' placeholder="Type Your Message Here"></textarea>
        </div>
        <button type="submit" className="submit-btn" disabled={loading}>{loading ? (<Spinner animation='border' size='sm'/>) : ('SUBMIT')}</button>


      </form>
    </div>
      </Container>
      <ToastContainer />
    </Container>

  )
}
