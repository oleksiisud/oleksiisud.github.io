import React, { useState } from 'react'
import './Sidebar.css'
import {
  HomeFilled,
  FileTextFilled,
  IdcardFilled,
  MailFilled,
  ProjectFilled,
  BulbFilled,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons'

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="sidebar-container">
      <aside className={isOpen ? 'sidebar open' : 'sidebar'}>
        <nav id="sidebar-nav">
          <ul>
            <li className="toggle-btn">
              <a onClick={handleToggle} aria-expanded={isOpen} aria-controls="sidebar-nav">
                {isOpen ? <LeftOutlined className='icon'/> : <RightOutlined className='icon'/>}
              </a>
            </li>

            <li>
              <a href="#home" title="Home">
                <HomeFilled className="icon" />
                {isOpen && <span className='text'>Home</span>}
              </a>
            </li>
            <li>
              <a href="#about" title="About">
                <IdcardFilled className="icon" />
                {isOpen && <span className='text'>About</span>}
              </a>
            </li>
            <li>
              <a href="#skills" title="Skills">
                <BulbFilled className="icon" />
                {isOpen && <span className='text'>Skills</span>}
              </a>
            </li>
            <li>
              <a href="#projects" title="Projects">
                <ProjectFilled className="icon" />
                {isOpen && <span className='text'>Projects</span>}
              </a>
            </li>
            <li>
              <a href="#contact" title="Contact">
                <MailFilled className="icon" />
                {isOpen && <span className='text'>Contact</span>}
              </a>
            </li>
          </ul>

          <div className="sidebar-footer">
            <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileTextFilled className="icon" />
                {isOpen && <span className='text'>Resume</span>}
            </a>
          </div>
        </nav>
      </aside>
    </div>
  )
}

export default Sidebar