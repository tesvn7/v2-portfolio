import React from 'react';

const Left = ({ children }) => {
  return (
    <div className="fixed flex flex-col w-1/2 ">
      {children}
    </div>
  );
};

export default Left;