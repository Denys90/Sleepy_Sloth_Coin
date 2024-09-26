import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Hero } from '../Hero/Hero';
import { About } from '../About/About';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
