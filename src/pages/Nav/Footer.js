import React from 'react';
import styles from '../../styles/navbar.module.css';

const Footer = () => {
  return (
    <div className="container-fluid" style={{ marginTop: '40px' }}>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="navbar-brand mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            INFIT
            <i className={`fa-solid fa-infinity ${styles['lol']}`}></i>
            L
          </a>
          <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <a href="/Terms" style={{ textDecoration: 'none', paddingRight: '10px' }}>
            <li style={{ color: '#6c757d!important' }}>Terms of Service</li>
          </a>
          <a href="/Privacy" style={{ textDecoration: 'none' }}>
            <li style={{ color: '#6c757d!important' }}>Privacy Policy</li>
          </a>
          <li className="ms-3">
            <a className="text-muted2" href="https://discord.com/channels/1074050985804169246">
              <i className="fa-brands fa-discord"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
