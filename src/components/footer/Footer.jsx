import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Tutkan</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">   
             <a href="https://www.instagram.com/akintutkan/" className="footer__social-link" target="_blank" rel="noreferrer"> <i class="bx bxl-instagram"></i> </a>
        <a href="https://twitter.com/Akintutkan" className="footer__social-link" target="_blank" rel="noreferrer"> <i class="bx bxl-twitter"></i></a>
        <a href="https://github.com/Akintutkan" className="footer__social-link" target="_blank" rel="noreferrer"> <i class="bx bxl-github"></i></a>
        <a href="https://www.linkedin.com/in/ahmet-akin-tutkan/" className="footer__social-link" target="_blank" rel="noreferrer"> <i class="bx bxl-linkedin"></i></a>
</div>
<span className='footer__copy'>&#160; AhmetAkınTutkan. All rights reserved <i class="uil uil-copyright"></i></span>
        </div>
    </footer>
  )
}

export default Footer