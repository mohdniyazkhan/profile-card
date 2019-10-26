import React from 'react';
import cardData from '../cardData';
import self from '../self.jpg'

console.log(self)
const Creditperson = (props) => {
    return (
        <div className="credit_box">
            <span className="credit_name">{cardData.name}</span>
            <img src={self} alt="person" className="credit_image" />
        </div>
    )
}

export default Creditperson;