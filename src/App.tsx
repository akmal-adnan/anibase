import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Snackbar from '@/components/Snackbar/Snackbar';
import Details from '@/pages/Details/Details';
import Home from '@/pages/Home/Home';
import NotFound from '@/pages/NotFound/NotFound';
import { Route, Routes } from 'react-router';
import ScrollToTop from './components/ScrollTopTop/ScrollToTop';

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
