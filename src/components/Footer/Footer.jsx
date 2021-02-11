import React, { useEffect, useState } from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <FooterContents />
    </div>
  );
};

const FooterContents = () => {
  // TODO: Global window resize listener
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  if (width < 700) {
    // < 700px (Vertical phones and small horizontal phones)
    return (
      <div className="footer-container">
        <p>© 2020 Encore Restaurant </p>
        
        {/* <p>
          <a href="mailto:contact@bccompsci.club">
            Email: contact@bccompsci.club
          </a>
        </p> */}
      </div>
    );
  } else {
    // > 700px (Desktops, laptops, tablets, and large horizontal phones)
    return (
      <div className="footer-container">
        <p>© Copyright 2020 Encore Restaurant NYC</p>
        {/* <p>
          0317 Ingersoll Hall, Brooklyn College •{' '}
          <a href="mailto:contact@bccompsci.club">
            Email: contact@bccompsci.club
          </a>
        </p> */}
      </div>
    );
  }
};

export default Footer;
