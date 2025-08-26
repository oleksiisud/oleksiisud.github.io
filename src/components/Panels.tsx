import React from 'react'
import './Panels.css'

interface PanelItem {
  name: string
  imageUrl: string
  desc?: string
}

interface PanelsProps {
  data: PanelItem[]
  className?: string
}

const Panels: React.FC<PanelsProps> = ({ data, className }) => {
  return (
    <div className={`panel-grid ${className || ''}`}>
      {data.map((item) => (
        <div className={`panel ${className || ''}`} key={item.name}>
          <img
            src={item.imageUrl}
            alt={`${item.name} logo`}
            className={`panel-logo ${className || ''}`}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.onerror = null;
              target.src = ``
            }}
          />
          <div className={`panel-overlay ${className || ''}`}>
            <h3>{item.name}</h3>
            {item.desc ? <p>{item.desc}</p> : <></>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Panels