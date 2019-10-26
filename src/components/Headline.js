import React from 'react';
import cardData from '../cardData';
const Heading = (props)=>{
    return(
        <div className="main_text">
            <h3 className="main_headline">
               {cardData.headline}
            </h3>
        </div>
    )
}

export default Heading;