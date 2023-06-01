import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import EmpleadoRow from './EmpleadoRow';

const EmpleadoList = ({empleado}) => {
    
    return (
        <section className='d-flex justify-content-center my-3'>
            <ListGroup>
            <hr />    
            {
            empleado.map((empleado)=>(
            <EmpleadoRow empleado={empleado} key={empleado.id}></EmpleadoRow>
            ))
            }
            </ListGroup>
        </section>
    );
};

export default EmpleadoList;