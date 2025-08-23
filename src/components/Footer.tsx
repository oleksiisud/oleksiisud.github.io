import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <div className='footer'>
        <hr />
        <div className='footer-sections'>
            <a href='#about'>About</a>
            <a href='#skills'>Skills</a>
        </div>
        <div className='footer-social'>
            <a href='https://www.linkedin.com/in/oleksii-sudarin/' target='_blank'>LinkedIn</a>
            <a href='https://www.github.com/oleksiisud' target='_blank'>Github</a>
        </div>
        <div className='footer-copy'>
            &copy; Oleksii Sudarin. All Rights Reserved.
        </div>
      </div>
    </>
  )
}

export default Footer