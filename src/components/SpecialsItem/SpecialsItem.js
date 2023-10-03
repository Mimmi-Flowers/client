import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SpecialsItem.css';

const SpecialsItem = ({ bouquet }) => {
    const navigate = useNavigate();

    const handleRedirect = e => {
        e.preventDefault();
        navigate(`Product/${bouquet.name.replace(/ /g, '')}`)
    }

    return (
        <div className='Bouquet' onClick={handleRedirect}>
            <h3 className='Bouquet-name'>{bouquet.name}</h3>
            <img className='Bouquet-img' src={bouquet.picture} alt={bouquet.name} />
            <p className='Bouquet-desc'>{bouquet.description}</p>
            <h4 className='Bouquet-price'>Price: {bouquet.price}</h4>
        </div>
    )
};

export default SpecialsItem;