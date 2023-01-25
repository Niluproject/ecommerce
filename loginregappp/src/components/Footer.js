import React from 'react';
// import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (

<footer className="text-center text-lg-start bg-light text-muted">

  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* Left */}
    {/* Right */}
    {/* <div>
      <a href className="me-4 text-reset">
      <SocialIcon url="https://linkedin.com/in/jaketrent" />
      </a>
      <a href className="me-4 text-reset">
      <SocialIcon url="https://www.example.com" label="Our portfolio" />
      </a>
      <a href className="me-4 text-reset">
      <SocialIcon url="https://jaketrent.com" network="tumblr" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-instagram" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-linkedin" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-github" />
      </a>
    </div> */}
    {/* Right */}
  </section>
  {/* Section: Social media */}
  {/* Section: Links  */}
  <section className>
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3" />CovRize
          </h6>
          <p>
            COLLECTIVE, WE RISE
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
          Discover Covrize
          </h6>
          <p>
          <a href="/about-us" className="text-reset">About Us</a>
          </p>
          <p>
          <a href="/our-leadership" className="text-reset">Leadership</a>
          </p>
          <p>
          <a href="/ourteam" className="text-reset">Our Team</a>
          </p>
          <p>
            <a href="/partner" className="text-reset">Partner with Us</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
          Technology Practices
          </h6>
          <p>
          <a href="/microsoft-technologies-development-solutions" className="text-reset">Microsoft Practices</a>
          </p>
          <p>
          <a href="/best-ui-ux-design-services-in-india" className="text-reset">UI/UX Development</a>
          </p>
          <p>
          <a href="/microsoft-aws-certified-deveops-engineering-team-services-india" className="text-reset">DevOps</a>
          </p>
          <p>
          <a href="/cloud-computing-experts-in-India" className="text-reset">Cloud Services</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3" /> D-403/404, Swati Clover,</p>
          <p>
            <i className="fas fa-envelope me-3" />
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3" /> +917486025032</p>
          <p><i className="fas fa-print me-3" /> +1(347) 352-0172</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://www.covrize.com/">CovRize.com</a>
  </div>
  {/* Copyright */}
</footer>


  );
}