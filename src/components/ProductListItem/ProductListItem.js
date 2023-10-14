import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductListItem.css';

function ProductListItem({ bouquet }) {
    const navigate = useNavigate();

    const handleRedirect = e => {
        e.preventDefault();
        // navigate(`Product/${bouquet.name.replace(/ /g, '')}`);
        navigate(`Product/${bouquet.id}`);
    }

    return (
        <div className='Bouquet' onClick={handleRedirect}>
            {/* <h3 className='Bouquet-name'>{bouquet.name}</h3> */}
            <img className='Bouquet-img' src={bouquet.picture} alt={bouquet.name} />
            <h4 className='Bouquet-price'>{bouquet.price}kr</h4>
            <p className='Bouquet-desc'>{bouquet.description}</p>
        </div>
    )
};

export default ProductListItem;