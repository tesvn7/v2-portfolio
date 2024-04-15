import React from 'react';
import Left from './Left';
import Right from './Right';

const LayoutComponent = ({ children, fixedContent }) => {
  return (
    <div className="flex h-screen">
      <Left>{fixedContent}</Left>
      <Right>{children}</Right>
    </div>
  );
};

export default LayoutComponent;