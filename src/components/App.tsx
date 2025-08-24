import { GithubFilled, LinkedinFilled } from '@ant-design/icons'
import './App.css'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Skills from './Skills'

function App() {
  return (
    <div className='container'>
      <div className='sidebar-space'><Sidebar /></div>
      <div className='content'>
        <section id='home' className='home-section'>
          <h1><img src='https://ca.slack-edge.com/T094PKG3ASD-U0963SM8H53-360b441beb05-512' />Oleksii Sudarin</h1>
        </section>
        <section id='about' className='about-section'>
          <h2>About</h2>
          <p>I am a Brooklyn College Student majoring in Computer Science and minoring in Data Science. I was born in Ukraine and immigratted to America in 2014. I am interested in comic books and watching movies in my free time.</p>
        </section>
        <section id='skills' className='skill-section'>
          <h2>Skills</h2>
          <Skills />
        </section>
        <section id='projects' className='project-section'>
          <h2>Projects</h2>
        </section>
        <section id='contact' className='contact-section'>
          <h2>Contact</h2>
          <div>
            <a href="https://github.com/oleksiisud" target="_blank" rel="noopener noreferrer" className='social-icon'><GithubFilled /></a>
            <a href="https://linkedin.com/in/oleksii-sudarin" target="_blank" rel="noopener noreferrer" className='social-icon'><LinkedinFilled /></a>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default App
