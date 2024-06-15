import React from 'react'

const lightDark = () => {
  console.log('lightdark')
  document.documentElement.style.setProperty('--main-bg-color', 'lightcoral')
}

export default function Header() {
  return (
    <div className="nav">
      <div className="title-div">
        <p>password app</p>
      </div>
      <div className="nav-div" onClick={lightDark}>
        <ul>light/dark</ul>
      </div>
      <div className="nav-div">
        <ul>
          <a
            href="https://github.com/J-Haynes/password-gen"
            target="_blank"
            rel="noreferrer"
          >
            <li>source</li>
          </a>
        </ul>
      </div>
    </div>
  )
}
