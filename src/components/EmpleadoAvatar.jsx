import React from 'react';
//import imagen from '../assets/descarga.png';
const EmpleadoAvatar = ({empleado}) => {
    return (
        <div>
        <img src= {empleado.pic.value} alt={`imagen de ${empleado.fullName}`} />
        </div>
    );
};

export default EmpleadoAvatar;