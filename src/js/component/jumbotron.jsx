import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function PageJumbotron() {
    return (
        <Container className="p-5 bg-secondary-subtle w-75 mb-4">
            <div>
                <h1 className="header">A Warm Welcome!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio ipsum quisquam magnam facilis laudantium et ad? Porro, nostrum voluptates!</p>
                <Button variant="primary">Call to action!</Button>{' '}
            </div>
        </Container>
    )
}

export default PageJumbotron