import React from 'react';

const SectionBorders = () => {
  return (
    <>
      <div className="border-foreground absolute -top-px -left-px z-5 h-2 w-2 border-l" />
      <div className="border-foreground absolute -top-px -right-px z-5 h-2 w-2 border-r" />
      <div className="border-foreground absolute -bottom-px -left-px z-5 h-2 w-2 border-b border-l" />
      <div className="border-foreground absolute -right-px -bottom-px z-5 h-2 w-2 border-r border-b" />
    </>
  );
};

export default SectionBorders;
