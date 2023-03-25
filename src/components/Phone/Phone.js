import React, { useState } from 'react';
import './Phone.css';

const Phone = (props) => {
    // console.log(props);
    const {phone_name, image} = props.phone;

    const [price, setPrice] = useState(200);
    const increasePrice = () => setPrice(price + 20);

    return (
          <div className="col">
          <div className="card h-100">
           <img className='phone-img' src={image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{phone_name}</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <h4>Price: <span className='text-danger'>{price}</span>$</h4>
              <button onClick={increasePrice} className='btn btn-primary'>Increase Price</button>
            </div>
          </div>
        </div>
    );
};

export default Phone;
