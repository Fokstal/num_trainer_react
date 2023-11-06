import React, { useRef } from 'react';
import './fly_obj.css'; // Импортируйте свой CSS

function FlyObj() {
  const buttonRef = useRef(null);
  const lineRef = useRef(null);

  const handleClick = () => {
    if (buttonRef.current && lineRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      lineRef.current.style.top = `${rect.y}px`;
      lineRef.current.style.left = `${rect.x}px`;
      lineRef.current.classList.add('fly');
      setTimeout(() => {
        lineRef.current.classList.remove('fly');
      }, 2000);
    }

    console.log(
    lineRef.current.getBoundingClientRect(),
    buttonRef.current.getBoundingClientRect()
    )
  };

  return (
    <div className="fly-obj">
      <button ref={buttonRef} onClick={handleClick} className='btn'>
        Нажми меня
      </button>
      <div ref={lineRef} className="line"></div>
    </div>
  );
}

export default FlyObj;
