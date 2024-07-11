// Input.js

import React from 'react';

const Input = ({ type = 'text', label, placeholder, value, onChange, className, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-gray-700">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border p-2 ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
