import React from 'react'
import '../Styles/Skills.css'
import { Container,Row,Col } from 'react-bootstrap'
import img1 from '../images/html.jfif'
import img2 from '../images/css.jfif'
import img3 from '../images/js.jfif'
import img4 from '../images/bootstrap.jfif'
import img5 from '../images/react.jfif'
import img6 from '../images/nodejs.png'


export default function Skills() {
  return (
    <Container fluid id='skills' className='bg'>
      <Container>
        <Row>
          <Col lg={12} >
          <h3 className='main-title'>SKILLS</h3>
          </Col>
        </Row>
        <Row className='row-2'>
          <Col lg={4} md={6} sm={12} xs={12} className='cols'>
          <div className="box1">
            <img src={img1} className='img-class'  alt='logo'/>
            <h4>HTML5</h4>
          </div>
          </Col>
          <Col lg={4} md={6} sm={12} xs={12} className='cols'>
          <div className="box1">
            <img src={img2} className='img-class' alt='logo'/>
            <h4>CSS3</h4>
          </div>
          </Col>
          <Col lg={4} md={6} sm={12} xs={12} className='cols'>
          <div className="box1">
            <img src={img3} className='img-class'  alt='logo'/>
            <h4>Javascript</h4>
          </div>
          </Col>


          <Col lg={4} md={6} sm={12} xs={12} className='cols'>
          <div className="box1">
            <img src={img4} className='img-class'  alt='logo'/>
            <h4>Bootstrap</h4>
          </div>
          </Col>
          <Col lg={4} md={6} sm={12} xs={12} className='cols'>
          <div className="box1">
            <img src={img5} className='img-class'  alt='logo'/>
            <h4>React</h4>
          </div>
          </Col>
          <Col lg={4} md={6} sm={12} xs={12} className='cols'>
          <div className="box1">
            <img src={img6} className='img-class'  alt='logo'/>
            <h4>Node.js</h4>
          </div>
          </Col>

        </Row>


      </Container>

    </Container>
  )
}
