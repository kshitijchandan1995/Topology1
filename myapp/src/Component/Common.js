import React, { useState } from 'react';
// import '../Component/common.css'; // Import your CSS file for styling

const Common=()=> {
  const [showText, setShowText] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleRectangleClick = () => {
    setShowText(true);
  };



  const onSubmit=()=>{
    
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    setDisplayText(inputValue);
    setShowText(false);
  };

  return (
    <div className="rectangle" onClick={handleRectangleClick}>
        {showText && displayText=='' ? (
          <form onSubmit={handleInputSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter text"
            />
          </form>
        ) : (
           <div className="displayText"  onEnter>{displayText}</div>
        
        )}
      </div>
  );
}

export default Common;
