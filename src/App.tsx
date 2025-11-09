import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import Snackbar from '@/components/Snackbar/Snackbar';
import Details from '@/pages/Details/Details';
import Home from '@/pages/Home/Home';
import NotFound from '@/pages/NotFound/NotFound';
import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Snackbar />
    </>
  );
};

export default App;
