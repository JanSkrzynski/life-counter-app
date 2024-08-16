import React from "react";

const Car = ({ className }) => {
  return (
    <svg
      className={className}
      width="28"
      height="25"
      viewBox="0 0 28 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 21.5V23C5 23.425 4.85625 23.7812 4.56875 24.0688C4.28125 24.3563 3.925 24.5 3.5 24.5H2C1.575 24.5 1.21875 24.3563 0.93125 24.0688C0.64375 23.7812 0.5 23.425 0.5 23V11L3.65 2C3.8 1.55 4.06875 1.1875 4.45625 0.9125C4.84375 0.6375 5.275 0.5 5.75 0.5H22.25C22.725 0.5 23.1562 0.6375 23.5438 0.9125C23.9312 1.1875 24.2 1.55 24.35 2L27.5 11V23C27.5 23.425 27.3562 23.7812 27.0687 24.0688C26.7812 24.3563 26.425 24.5 26 24.5H24.5C24.075 24.5 23.7188 24.3563 23.4313 24.0688C23.1438 23.7812 23 23.425 23 23V21.5H5ZM4.7 8H23.3L21.725 3.5H6.275L4.7 8ZM7.25 17C7.875 17 8.40625 16.7812 8.84375 16.3438C9.28125 15.9062 9.5 15.375 9.5 14.75C9.5 14.125 9.28125 13.5938 8.84375 13.1562C8.40625 12.7188 7.875 12.5 7.25 12.5C6.625 12.5 6.09375 12.7188 5.65625 13.1562C5.21875 13.5938 5 14.125 5 14.75C5 15.375 5.21875 15.9062 5.65625 16.3438C6.09375 16.7812 6.625 17 7.25 17ZM20.75 17C21.375 17 21.9062 16.7812 22.3438 16.3438C22.7812 15.9062 23 15.375 23 14.75C23 14.125 22.7812 13.5938 22.3438 13.1562C21.9062 12.7188 21.375 12.5 20.75 12.5C20.125 12.5 19.5938 12.7188 19.1562 13.1562C18.7188 13.5938 18.5 14.125 18.5 14.75C18.5 15.375 18.7188 15.9062 19.1562 16.3438C19.5938 16.7812 20.125 17 20.75 17ZM3.5 18.5H24.5V11H3.5V18.5Z" />
    </svg>
  );
};

export default Car;