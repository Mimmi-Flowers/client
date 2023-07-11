import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Specials.css';

const Specials = ({ setting }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {

        switch (setting) {
            case 'Favorite':
                const res1 = await axios.get('http://localhost:8500/favorite')
                setData(res1.data.data)
                break;
            case 'Season':
                const res2 = await axios.get('http://localhost:8500/season')
                setData(res2.data.data)
                break;
            default: 
                setData(['Something went wrong']);
        }
        
    }

    useEffect(() => {
        fetchData();
      }, [])

    return (
        <div className='Specials-container'>
            <h2>{setting}</h2>
            {data.map(data => <div className='Bouquet' key={data.name}>
                                <h3 className='Bouquet-name'>{data.name}</h3>
                                <img src={data.picture} alt={data.name} />
                                <p className='Bouquet-desc'>{data.description}</p>
                                <h4 className='Bouquet-price'>Price: {data.price}</h4>
                            </div>)}
        </div>
    );
};

export default Specials;