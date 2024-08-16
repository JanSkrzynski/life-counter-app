import React from "react";

const ArrowForward = ({ className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.5666 12.3334H0.333313V9.66671H16.5666L9.09998 2.20004L11 0.333374L21.6666 11L11 21.6667L9.09998 19.8L16.5666 12.3334Z" />
    </svg>
  );
};

export default ArrowForward;
