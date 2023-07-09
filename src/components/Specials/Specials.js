import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Specials.css';

const Specials = ({ setting }) => {
    const [data, setData] = useState([]);

    const fetchData = async (setting) => {


        switch (setting) {
            case 'Favorite':
                const res1 = await axios.get({url: '../../db/Favorite.json'})
                setData(res1.data)
                break;
            case 'Season':
                const res2 = await axios.get({url: '../../db/Season.json'})
                setData(res2.data)
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
            <p>{data}</p>
        </div>
    );
};

export default Specials;