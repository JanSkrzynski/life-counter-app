import React from "react";

const AccountBalance = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 30 31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.5 24.5V14H7.5V24.5H4.5ZM13.5 24.5V14H16.5V24.5H13.5ZM0 30.5V27.5H30V30.5H0ZM22.5 24.5V14H25.5V24.5H22.5ZM0 11V8L15 0.5L30 8V11H0ZM6.675 8H23.325L15 3.875L6.675 8Z" />
    </svg>
  );
};

export default AccountBalance;
