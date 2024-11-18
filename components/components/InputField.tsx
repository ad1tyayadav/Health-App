import React from 'react';

const InputField = ({ placeholder, value, onChange }: { placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <input
      type="text"
      className="input-field"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputField;
