import React from 'react'
import { Icon } from '@iconify/react';

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/akintutkan/" className="home__social-icon" target="_blank" rel="noreferrer"> <i class="uil uil-instagram"></i> </a>
        <a href="https://twitter.com/Akintutkan" className="home__social-icon" target="_blank" rel="noreferrer"> <i class="uil uil-twitter"></i></a>
        <a href="https://github.com/Akintutkan" className="home__social-icon" target="_blank" rel="noreferrer"> <i class="uil uil-github-alt"></i></a>
        <a href="https://www.linkedin.com/in/ahmet-akin-tutkan/" className="home__social-icon" target="_blank" rel="noreferrer"> <i class="uil uil-linkedin"></i></a>
        <a href="https://medium.com/@akin.tutkan" className="home__social-icon" target="_blank" rel="noreferrer"> <Icon icon="ph:medium-logo-fill" /></a>

    </div>
  )
}

export default Social