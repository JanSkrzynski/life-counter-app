import React from "react";

const ArrowBack = ({ className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.43331 12.3334L12.9 19.8L11 21.6667L0.333313 11L11 0.333374L12.9 2.20004L5.43331 9.66671H21.6666V12.3334H5.43331Z" />
    </svg>
  );
};

export default ArrowBack;
