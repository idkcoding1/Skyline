import React from 'react';
import { Outlet } from 'react-router-dom';

import Footera from './Footer';
import HeaderNav from './Header';
import ScrollToTop from './ScrollTotop';


interface RootLayoutProps {
  splashDuration?: number;
}

const RootLayout: React.FC<RootLayoutProps> = () => {
 
 
  ScrollToTop();

  return (
    <>
      <HeaderNav />
      <main className="flex flex-col min-h-screen">
        <div className="">
          <section>
            <Outlet />
          </section>
        </div>
        <Footera />
      </main>
    </>
  );
};

export default RootLayout;