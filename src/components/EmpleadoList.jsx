import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const EmpleadoList = () => {
    return (
        <section className='d-flex flex-column'>
            <ListGroup>
            <EmpleadoRow></EmpleadoRow>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            </ListGroup>
        </section>
    );
};

export default EmpleadoList;