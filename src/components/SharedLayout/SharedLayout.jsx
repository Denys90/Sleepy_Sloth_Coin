import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Hero } from '../Hero/Hero';
import { About } from '../About/About';
import { HowToBuy } from '../HowToBuy/HowToBuy';
import { Tokenomnics } from '../Tokenomics/Tokenomnics';
import { Footer } from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <HowToBuy />
      <Tokenomnics />
      <Footer />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
