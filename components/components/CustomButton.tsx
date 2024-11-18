import React from 'react';

const CustomButton = ({ label, onClick, disabled }: { label: string, onClick: () => void, disabled?: boolean }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default CustomButton;
