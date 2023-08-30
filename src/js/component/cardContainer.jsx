import React from 'react';
import PageCard from './card';
import Container from 'react-bootstrap/Container';

function PageCardContainer() {
    return (
        <Container className="w-75 d-flex flex-column flex-md-row column-gap-4 row-gap-4 p-0 mb-4">
            <PageCard/>
            <PageCard/>
            <PageCard/>
            <PageCard/>
        </Container>
    )
}

export default PageCardContainer;