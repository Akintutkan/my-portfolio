import React from 'react'
import "./scroll.css"

const Scroll = () => {
    window.addEventListener('scroll',function(){
            const scrollUp = document.querySelector(".scroll");
            if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll")
    } )
  return (
   <a href="#" className="scroll">
    <i className="uil uil-arrow-up scroll__icon"></i>
   </a>
  )
}

export default Scroll