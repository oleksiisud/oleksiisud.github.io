import React from 'react';
import './Skills.css';

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

const Skills: React.FC = () => {
  return (
    <div className="skills-grid">
      {skillsData.map((skill) => (
        <div className="skill-panel" key={skill.name}>
          <img
            src={skill.imageUrl}
            alt={`${skill.name} logo`}
            className="skill-logo"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.onerror = null;
              target.src = ``
            }}
          />
          <div className="skill-overlay">
            <h3>{skill.name}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills