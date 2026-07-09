import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import '../Styles/About.css';
// import image from '../images/img3.avif'
import image from '../images/vaibhav.webp'
import { Link } from 'react-scroll';
// import { yellow } from '@mui/material/colors';
import resume from "../assets/Vaibhav_Resume(2026).pdf";


export default function About() {
  return (
    <div id='about'>
      <Container>
        <Row>
          <Col className='about1' lg={7}>
            <h3 className="section-title">
              Frontend Developer
              <span className="highlight">
                / MERN Stack Trainee
              </span>
            </h3>

            <p>
              Hello! I'm <strong>Vaibhav Prajapati</strong>, a passionate
              Frontend / React Developer with hands-on experience in
              <span className="highlight-text">
                {" "}
                React.js, JavaScript, HTML5, CSS3,
                Bootstrap, Tailwind CSS and Material UI.
              </span>
            </p>
            <p>
              I focus on building responsive, user-friendly, and scalable web applications with clean code and reusable components.
              Currently, I am strengthening my backend expertise by learning Node.js, Express.js, MySQL,
              and REST API integration to grow as a Full Stack Developer.</p>

            <div className="skill-tags">

              <span>React.js</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Bootstrap</span>
              <span>Tailwind CSS</span>
              <span>Node.js</span>
              <span>MySQL</span>

            </div>
            <div className='btn-group'>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <button className="btn-two text-uppercase">
                  Download Resume
                </button>
              </a>

              <Link to='contact' className="contact-link"><button className='text-uppercase'>Contact Me</button></Link>
            </div>
          </Col>
          <Col className='about2 text-center' lg={4}>
            <img src={image} alt='about' />
          </Col>
        </Row>


        <Row className='row2'>
          <Col lg={12}>
            <h3 className='main-title text-uppercase'>Experience</h3>
          </Col>
          <Col lg={12} className='main'>
            <Card className='card2'>
              <div className="info">
                <div className="role">Part-Time Associate | Syntecxhub  </div>
                <div className="time">2026 - Present</div>
              </div>

              <div className="details">Part-Time Associate Developer and actively contributing to full-stack development,
                debugging, and improving existing product features. </div>
            </Card>
            <Card className='card2'>
              <div className="info">
                <div className="role">Full Stack Developer Trainee | Disha Computer Institute </div>
                <div className="time">2025 - Present</div>
              </div>

              <div className="details">Completed React.js frontend training with hands-on project development.
                Currently expanding skills in backend development and API integration. </div>
            </Card>
            <Card className='card2'>
              <div className="info">
                <div className="role">Software Developer Intern | Alvi Software Pvt. Ltd. </div>
                <div className="time"> 2022 - 2024 </div>
              </div>

              <div className="details">Started as a Software Developer Intern and progressed to Junior Web Developer.
                 Worked on Angular and Node.js applications, REST API integration,
                 CRUD operations, debugging, and improving application performance.</div>
            </Card>

          </Col>
        </Row>
      </Container>
    </div>
  )
}
