import React from 'react'
import Card from 'react-bootstrap/Card';
import'../Styles/Card1.css'


export default function Card1({image,title,desc,view,source}) {
  return (
   <>
    <Card className='main1'>
      <Card.Img src={image} className='image1' />
      <Card.Body className='card-body'>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='desc'>
        {desc}
        </Card.Text>
        <div className="btn-portfolio">
       <a href={view} target='_blank' rel="noreferrer"><button className='btn-p1'>VIEW</button></a>
       <a href={source} target='_blank' rel="noreferrer"> <button className='btn-p1'>SOURCE</button></a>
        </div>
      </Card.Body>
</Card>

   </>
  )
}
