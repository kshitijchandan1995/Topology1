import React, { useState } from 'react';
import '../Component/new.css'; // Import your CSS file for styling
import Common from './Common';

const Help=()=> {
  const [showText, setShowText] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleRectangleClick = () => {
    setShowText(true);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    setDisplayText(inputValue);
    setShowText(false);
  };

  return (
    <div className="container">
            <Common style={{left:'50px'}}></Common>
            <div className='line-container'>
            <div className='div_above_line1  text-box'><input type='text' placeholder='Source IP'></input></div>

            <div className='line1'></div>
            <div className='div_below_line1  text-box'><input type='text' placeholder='To Zone'></input></div>
            </div>
        <div className='div1'><input type='text' placeholder='baseline cofig'></input></div>
        <div className='div2'><input type='text' placeholder='No of policy'></input></div>

    <Common></Common>
    <div className='line-container'>
            <div className='div_above_line2  text-box'><input type='text' placeholder='Destination IP'></input></div>

            <div className='line2'></div>
            <div className='div_below_line2  text-box'><input type='text' placeholder='From Zone'></input></div>
            </div>
    {/* <div className='div_above_line2'><input type='text' placeholder='Destination IP'></input></div>

    <div className='line2'></div>
    <div className='div_below_line2'><input type='text' placeholder='From Zone'></input></div> */}

      <div className='div3'><input type='text' placeholder='HA'></input></div>
        <div className='div4'><input type='text' placeholder='TC '></input></div>
        <Common ></Common>
    </div>
  );
}

export default Help;
