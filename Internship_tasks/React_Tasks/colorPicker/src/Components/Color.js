import React, { useState } from 'react';
import './Color.css'


function Color({ colors, onColorSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleColorList = () => {
    setIsOpen(!isOpen);
  };

  const selectColor = (color) => {
    onColorSelect(color);
    setIsOpen(false);
  };

  return (
    <div className="color-picker">
      {isOpen && (
        <ul className="color-picker__list">
          {colors.map((color, index) => (
            <li
              key={index}
              className="color-picker__item"
              style={{ backgroundColor: color }}
              onClick={() => selectColor(color)}
            />
          ))}
        </ul>
      )}
      <button className="color-picker__button" onClick={toggleColorList}>
        Select a color
      </button>
    </div>
  );
}

export default Color;