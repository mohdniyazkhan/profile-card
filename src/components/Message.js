import React from 'react';
import cardData from '../cardData';

  const Message = (props)=>{
   return(
       <section className="message">
    <h4 className="message__headline">
      {cardData.headline}
    </h4>
    <p className="message__body"> 
      {cardData.message}
    </p>
    <a href={cardData.url} className="message__url">
      {cardData.urlDisplayName}
    </a>
  </section>
   )
}

export default Message;