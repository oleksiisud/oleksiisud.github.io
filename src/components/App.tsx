import { GithubFilled, LinkedinFilled } from '@ant-design/icons'
import './App.css'
import Footer from './Footer'
import Sidebar from './Sidebar'

function App() {
  return (
    <div className='container'>
      <div className='sidebar-space'><Sidebar /></div>
      <div className='content'>
        <section className='home-section'>
          <h1>Oleksii Sudarin</h1>
        </section>
        <section className='about-section'>
          <h2>About</h2>
          <p>I am a Brooklyn College Student majoring in Computer Science and minoring in Data Science.</p>
        </section>
        <section className='skill-section'>
          <h2>Skills</h2>
        </section>
        <section className='project-section'>
          <h2>Projects</h2>
        </section>
        <section className='contact-section'>
          <h2>Contact</h2>
          <div>
            <a href="https://github.com/oleksiisud" target="_blank" rel="noopener noreferrer"><GithubFilled /></a>
            <a href="https://linkedin.com/in/oleksii-sudarin" target="_blank" rel="noopener noreferrer"><LinkedinFilled /></a>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default App
