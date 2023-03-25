import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect( () => {
        fetch('https://openapi.programming-hero.com/api/phones?search=phone')
        .then(res => res.json())
        .then(data => setPhones(data.data))
    }, []);

    return (
        <div>
            <h1 className='bg-success-subtle py-2 text-info'>React Phone Hunter</h1>
            <h2 className='text-warning'>All Phones: <span className='text-danger fs-3'>{phones.length}</span></h2>
             <div className="row row-cols-1 row-cols-md-3 g-4">
              {
                 phones.map(phone => <Phone phone={phone} key={phone.slug}></Phone>)
              }
             </div>

        </div>
    );
};

export default Phones;
