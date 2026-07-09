import React from 'react'
import Card1 from './Card1'
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../images/Ecommerce.png'
import image2 from '../images/stopwatch.png'
import image3 from '../images/todolist_wide_v3.png'
import image4 from '../images/DIvinepuja.png'
import image5 from '../images/p5.png'
import image6 from '../images/p6.png'


export default function Projects() {
  return (
    <Container id='projects' fluid className='Portfolio-container'>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className='title-projects'>PROJECTS</h3>
          </Col>
        </Row>
        <Row className='row-projects'>
          <Col lg={4} md={6} sm={12} xs={12}>
            <Card1 image={image1} view='https://ecommerce-sage-rho-56.vercel.app/'
              // source='https://github.com/Twinkle-prajapati/React_Calculator'
              source='https://github.com/VaibhavPrajapati277/React-Ecommerce.git'
              title='E-Commerce - React.js'
              desc='Developed a responsive e-commerce frontend using React.js and Tailwind CSS, featuring product search & category filters, cart management, and authentication UI— built entirely with React Hooks for state handling and deployed on Vercel.' />

          </Col>
          <Col lg={4} md={6} sm={12} xs={12}>
            <Card1 image={image2} view='https://stopwatch-kappa-woad.vercel.app/' source='https://github.com/VaibhavPrajapati277/Stopwatch.git' title='Stopwatch' desc='Developed Stopwatch applications using React,js, implementing real-time state updates and responsive, reusable UI components. Implemented core functionalities, focusing on clean and functional component structure.' />

          </Col>
          <Col lg={4} md={6} sm={12} xs={12}>
            <Card1 image={image3} view='https://todo-list-five-iota-79.vercel.app/' source='https://github.com/VaibhavPrajapati277/TodoList.git' title='Todo - List' desc='Built a To-Do List app using React.js, with add, delete, and task tracking under Pending and Completed sections. Used React Hooks (useState) for real-time state management and a clean, simple UI.' />

          </Col>
        </Row>

        <Row className='mt-4'>
          <Col lg={4} md={6} sm={12} xs={12}>
            <Card1 image={image4} view='https://divine-puja-astro-web-design.vercel.app/' source='https://github.com/VaibhavPrajapati277/Divine_puja_astro-web-design.git' title='Divine Puja Astro - React.js' desc='Built a responsive e-commerce UI for Divine Puja Astro using HTML, CSS, JavaScript, and Bootstrap, featuring an interactive Swiper carousel for product showcase. Designed a clean, mobile-friendly layout with intuitive navigation for a seamless shopping experience.' />

          </Col>
          <Col lg={4} md={6} sm={12} xs={12}>
            <Card1 image={image5} view='https://note-keeper-twinkles-projects-416cf758.vercel.app/' source='https://github.com/Twinkle-prajapati/Note_Keeper' title='Note Keeper App' desc='Developed a Note Keeper application using React.js with a user interface built using Bootstrap. The app allows users to create, edit, and manage notes efficiently, featuring a clean and responsive design' />

          </Col>
          <Col lg={4} md={6} sm={12} xs={12}>
            <Card1 image={image6} view='https://fruit-store-twinkles-projects-416cf758.vercel.app/' source='https://github.com/Twinkle-prajapati/Fruit_Store' title='Fruit Store App' desc='Fruit store application is built using React and Redux, offering a smooth and responsive shopping experience. It allows users to add, remove, and manage items in their cart with real-time updates.' />

          </Col>
        </Row>

      </Container>
    </Container>
  )
}
