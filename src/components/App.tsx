import { GithubFilled, GlobalOutlined, LinkedinFilled } from '@ant-design/icons'
import './App.css'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Panels from './Panels'

const skillsData = [
  { name: 'Python', imageUrl: 'https://spaces-cdn.clipsafari.com/zfdcbo72px0of6jlw2zxfpzys1l8' },
  { name: 'Java', imageUrl: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
  { name: 'React', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png' },
  { name: 'JavaScript', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png' },
  { name: 'TypeScript', imageUrl: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
  { name: 'Flask', imageUrl: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/flask-oabo4nn8vibtrqvucoolel.png/flask-bcpzvlxe9vryvu8v3etb.png?_a=DATAg1AAZAA0' },
  { name: 'C++', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png' },
  { name: 'SQL', imageUrl: 'https://www.fast2.tech/images/connectors/sql-logo.webp' },
]

const projectsData = [
  { name: 'Trackify', imageUrl: 'src/assets/trackify_screenshot.png', desc: '<GlobalOutlined />: https://trackify-3140.web.app/\n<GithubFilled />'}
]

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
          <Panels data={skillsData} className='skills' />
        </section>
        <section id='projects' className='project-section'>
          <h2>Projects</h2>
          <Panels data={projectsData} className='projects' />
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
