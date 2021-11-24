import React, { useState } from 'react';

const TextInput = function TextInput() {
  const [value, setValue] = useState<string>('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
};

export default TextInput;
