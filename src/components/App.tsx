import { GithubFilled, LinkedinFilled } from '@ant-design/icons'
import './App.css'
import Footer from './Footer'
import Sidebar from './Sidebar'

function App() {
  return (
    <div className='container'>
      <div className='sidebar'><Sidebar /></div>
      <div className='content'>
        <h1>Oleksii Sudarin</h1>
        <h2>About</h2>
        <div>I am a Brooklyn College Student majoring in Computer Science and minoring in Data Science.</div>
        <h2>Skills</h2>
        
        <h2>Projects</h2>
        <h2>Contact</h2>
        <div><GithubFilled /><LinkedinFilled /></div>
        <Footer />
      </div>
    </div>
  )
}

export default App
