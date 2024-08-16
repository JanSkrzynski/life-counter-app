import React from "react";

const WineBar = ({ className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="18"
      height="28"
      viewBox="0 0 18 28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 27.5V24.5H7.5V18.35C5.35 18 3.5625 17 2.1375 15.35C0.7125 13.7 0 11.75 0 9.5V0.5H18V9.5C18 11.75 17.2875 13.7 15.8625 15.35C14.4375 17 12.65 18 10.5 18.35V24.5H15V27.5H3ZM9 15.5C10.4 15.5 11.625 15.075 12.675 14.225C13.725 13.375 14.425 12.3 14.775 11H3.225C3.575 12.3 4.275 13.375 5.325 14.225C6.375 15.075 7.6 15.5 9 15.5ZM3 8H15V3.5H3V8Z" />
    </svg>
  );
};

export default WineBar;
