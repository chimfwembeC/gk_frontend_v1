import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from '../context/ThemeProvider';

const Footer = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <footer className={`py-4 ${isDarkMode ? "bg-dark text-light" : 'bg-light text-dark'}`} style={{ position: "absolute", bottom: 0, width: "100%" }}>
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna ac ligula viverra vehicula.</p>
            <p>Follow us on social media:</p>
            <div className="d-flex">
              <a href="https://www.facebook.com"><FaFacebook size={24} className={`text-light mr-3 ${isDarkMode ? "text-light" : 'text-dark'}`} /></a>
              <a href="https://www.twitter.com"><FaTwitter size={24} className={`text-light mr-3 ${isDarkMode ? "text-light" : 'text-dark'}`} /></a>
              <a href="https://www.instagram.com"><FaInstagram size={24} className={`text-light mr-3 ${isDarkMode ? "text-light" : 'text-dark'}`} /></a>
            </div>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-end">
            <div onClick={toggleTheme} className="cursor-pointer">
              {isDarkMode ? <BsSun size={24} className={`text-light mr-2 ${isDarkMode ? "text-light" : 'text-dark'}`} /> : <BsMoon size={24} className={`mr-2 ${isDarkMode ? "text-light" : 'text-dark'}`} />}
              <span className='px-4'>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </div>
          </Col>
        </Row>
      </Container>    
    </footer>
  );
};

export default Footer;
