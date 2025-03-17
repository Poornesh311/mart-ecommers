import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';

const PageFooter = () => {
  return (
    <div className="footer-wrapper" style={{ backgroundColor: 'skyblue', padding: '20px 0' }}>
      <footer className="footer-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        <div className="footer-sections" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div className="footer-section" style={{ flex: '1 1 200px', margin: '10px' }}>
            <div className="brand-info">
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <FaShoppingBag />
                <h4 style={{ marginLeft: '5px' }}>Mart</h4>
              </span>
              <p style={{ marginTop: '10px', lineHeight: '1.5' }}>
                An 'Information Mart' is a database setup that is used to store specific data for individual purposes, allowing security, flexibility, and easy access to the information.
              </p>
            </div>
          </div>

          <div className="footer-section" style={{ flex: '1 1 200px', margin: '10px' }}>
            <h5 style={{ fontWeight: 'bold', marginBottom: '15px' }}>About Us</h5>
            <ul style={{ listStyle: 'none', padding: '0', textAlign: 'left' }}>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="footer-section" style={{ flex: '1 1 200px', margin: '10px' }}>
            <h5 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Customer Care</h5>
            <ul style={{ listStyle: 'none', padding: '0', textAlign: 'left' }}>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Track Your Order</li>
              <li>Corporate & Bulk Purchasing</li>
              <li>Returns & Refunds</li>
            </ul>
          </div>

          <div className="footer-section" style={{ flex: '1 1 200px', margin: '10px' }}>
            <h5 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Contact Us</h5>
            <ul style={{ listStyle: 'none', padding: '0', textAlign: 'left' }}>
              <li>70 Washington Square South,</li>
              <li>New York, NY 10012, United States</li>
              <li><i>Email:</i> example@gmail.com</li>
              <li><i>Phone:</i> +1 1122 333 555</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageFooter;