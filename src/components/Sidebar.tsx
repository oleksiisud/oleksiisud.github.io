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
      <aside className={isOpen ? 'sidebar sidebar-open' : 'sidebar sidebar-closed'}>
        <nav className='sidebar-flex'>
          <ul className='sidebar-top'>
            <li className='collapse-button'>
              <a onClick={handleToggle} aria-expanded={isOpen}>
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
            <ul>
              <li>
                <a href="https://docs.google.com/document/d/1vtFQIo25w2i3Sy2CbZG5HQkzRUrivlgVyAl9bW9XQm8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FileTextFilled className="icon" />
                {isOpen && <span className='text'>Resume</span>}
            </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
  )
}

export default Sidebar