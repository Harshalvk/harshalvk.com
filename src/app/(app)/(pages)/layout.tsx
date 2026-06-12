import React from 'react';

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col border-x p-4">
      {children}
    </section>
  );
};

export default PagesLayout;
