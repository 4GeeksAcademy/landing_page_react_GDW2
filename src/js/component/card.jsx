import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import CardImage from '../../img/500x325.png';

function PageCard() {
    return (
        <Card>
          <Card.Img variant="top" src='https://images.unsplash.com/photo-1589441161120-8781d5644435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80' />
          <Card.Body className='text-center p-0'>
            <Card.Title className='p-2 mt-2'>Card Title</Card.Title>
            <Card.Text className='px-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, omnis!
            </Card.Text>
            <div class="card-footer text-body-secondary p-3">
                <Button variant="primary">Find Out More</Button>
            </div>
          </Card.Body>
        </Card>
      );
}

export default PageCard; 