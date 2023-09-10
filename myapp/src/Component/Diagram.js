import React, { useState } from 'react';
import '../Component/new.css'; 
import Common from './Common';
import {Container , Row, Col} from 'react-bootstrap'

const Diagram=()=> {
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
    setDisplayText(inputValue)
    setShowText(false);
  };

  return (
    <div>
        <Container>
    <Row className='row'>
        <Col>
        <Common></Common>
        </Col> 
        
        
        <Col>
            
            <Row className='text-box'><input type='text' placeholder='Source IP'></input></Row>

            <Row className='line1'></Row>
            <Row className='text-box2'><input type='text' placeholder='To Zone'></input></Row>
        </Col>
<Col>
    <Row><Common></Common></Row>
    <Row className='basetextfield'><input type='text' placeholder='baseline cofig'></input></Row>    
        <Row className='basetextfield'><input type='text' placeholder='No of policy'></input></Row>
        <Row className='basetextfield'><input type='text' placeholder='HA'></input></Row>
        <Row className='basetextfield'><input type='text' placeholder='TC '></input></Row>
    </Col>

    <Col>
            <Row className='text-box'><input type='text' placeholder='Destination IP'></input></Row>

            <Row className='line2'></Row>
            <Row className='text-box2'><input type='text' placeholder='From Zone'></input></Row>
    </Col>
    {/* <div className=''><input type='text' placeholder='Destination IP'></input></div>

    <div className=''></div>
    <div className=''><input type='text' placeholder='From Zone'></input></div>  */}

       {/*  */}
        <Col >
        <Common ></Common>
        </Col>
    </Row>
    </Container>
    </div>
  );
}

export default Diagram;
