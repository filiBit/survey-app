import React from 'react';

const MainLayout = function MainLayout({ title = '', children }: ComponentProperties) {
  return (
    <div className="w-full lg:max-w-3xl p-5 lg:p-10 mx-auto bg-white">
      <h1 className="text-center text-5xl mb-10">{title}</h1>
      {children}
    </div>
  );
};

export default MainLayout;

interface ComponentProperties {
    title?: string;
    children: React.ReactNode;
}
