import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data1 from '../../db/Favorite.json';
import data2 from '../../db/Season.json'; 
import './Specials.css';

const Specials = ({ setting }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {

        switch (setting) {
            case 'Favorite':
                const res1 = await axios.get('/home/lymgo/Work/MimmiFlowers/client/src/db/Favorite.json')
                console.log('Favorite:', res1)
                setData(res1.data.data)
                break;
            case 'Season':
                // const res2 = await fetch('../../db/Season.json')
                setData(data2.data)
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
            {data.map(data => <div key='{data.name}'>{data.name}</div>)}
        </div>
    );
};

export default Specials;