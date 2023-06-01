import React from 'react';
import EmpleadoAvatar from './EmpleadoAvatar';
import ListGroup from 'react-bootstrap/ListGroup';

const EmpleadoRow = ({empleado}) => {
    return (
        <div >
        <ListGroup.Item className='d-flex'>
        <div>
        <EmpleadoAvatar empleado={empleado}></EmpleadoAvatar>
        </div>
        <div className='d-flex mx-5'>
        <p>{empleado.fullName}</p>
        <p>{empleado.id}</p>
        </div>
        <div className='d-flex flex-column'>
        <p>{empleado.title}</p>
        <p>{empleado.department}</p>
        </div>
        </ListGroup.Item>
        
        
        </div>
    );
};

export default EmpleadoRow;