import React, { useState } from 'react';

const RatingInput = function RatingInput() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue({ value: event.target.value });
  }

  return (
    <input type="number" value={value} onChange={handleChange} />
  );
};

export default RatingInput;
