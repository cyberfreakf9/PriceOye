import React from 'react'

const Footer = () => {
  return (
    <div className=" full-footer-container">
      <div className="footer-container">
        <div className="footer-container-grid-one">
          <div className="footer-container-left">
            <span className="footer-logo">
              <img src="/images/logo.svg" />{' '}
            </span>
            <span>
              <a href="#">About Us</a>{' '}
            </span>
            <span>
              <a href="#">FAQs</a>{' '}
            </span>
            <span>
              <a href="#">Contact Us</a>{' '}
            </span>
            <span>
              <a href="#">Carers</a>{' '}
            </span>
            <span>
              <a href="#">Press & Blog</a>{' '}
            </span>
            <span>
              <a href="#">Terms & Condition</a>{' '}
            </span>
          </div>
          <div className="footer-container-right">
            <h5>Customer Services</h5>
            <span>
              <a href="#">Help Career</a>{' '}
            </span>
            <span>
              <a href="#">Privacy Policy</a>{' '}
            </span>
            <span>
              <a href="#">Installment Plan</a>{' '}
            </span>
            <span>
              <a href="#">E-Waranty Activation</a>{' '}
            </span>
          </div>
        </div>
        <div className="footer-container-grid-two">
          <h4>Secure Payment Methods</h4>
          <div className="bank-card">
            <img src="images/bank.svg" alt="bank credit card image" />
          </div>
          <div className="play-btn">
            <img src="images/play.png" alt="google play image" />
          </div>
        </div>
      </div>
      <div className="footer-primary">
        <div className="footer-row">
          <div className="text-white">PriceOye.pk</div>
          <div className="img-flex">
            <div className="img-flex-ima">
              <img src="https://static.priceoye.pk/images/social-youtube.svg" />
              <img src="https://static.priceoye.pk/images/social-fb.svg" />
              <img src="https://static.priceoye.pk/images/social-instagram.svg" />
              <img src="https://static.priceoye.pk/images/tiktok.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
