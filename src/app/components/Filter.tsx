"use client";  
import React from 'react';

interface FilterProps {
  category: string;
  isChecked: boolean;
  onCheckboxChange: (category: string) => void;
}

const Filter: React.FC<FilterProps> = (props) => {
  const handleCheckboxChange = () => {
    props.onCheckboxChange(props.category);
  };

  return (
    <div className="filter">
      <label>
        {props.category}
        <input
          type="checkbox"
          checked={props.isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
};

  
  export default Filter
