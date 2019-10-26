import React from 'react';
import '../App.css';
import Message from './Message';
import Creditperson from './CreditBox';
import Heading from './Headline';
import Logo from './Logo';
const App = ()=>{
    return(
        <div className="main_card">
            <Logo/>
            <Heading/>
            <Creditperson/>
            <Message/>
        </div>
    )
}

export default App;