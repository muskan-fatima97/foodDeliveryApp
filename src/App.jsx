import { Routes, Route, useLocation } from 'react-router-dom';
import './foodDeliveryApp.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Slider from './components/Slider';
import Cards from './components/Cards';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faGoogle, faWindows } from '@fortawesome/free-brands-svg-icons';
import Modal from 'react-bootstrap/Modal';
import AddToCart from './components/AddToCart';

library.add(faFacebookF, faGoogle, faWindows);

const App = () => {
  const location = useLocation();
  const state = location.state;
  const isLandingPage = location.pathname === '/';

  return (
    <>
      <Header />
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={
          <>
            <Slider />
            <Cards />
            <Footer />
          </>
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/addtocart" element={<AddToCart />} />
      </Routes>

      {/* Code for Popups of SignIn/ SignUp */}
      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="/signin"
            element={
              <Modal show centered onHide={() => window.history.back()}>
                <Modal.Header closeButton>
                  <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SignIn />
                </Modal.Body>
              </Modal>
            }
          />
          <Route
            path="/signup"
            element={
              <Modal show centered onHide={() => window.history.back()}>
                <Modal.Header closeButton>
                  <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SignUp />
                </Modal.Body>
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};

export default App;
