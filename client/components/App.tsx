import React, { useState } from 'react'
import Header from './Header'
import Form from './Form'
import Footer from './Footer'
import Info from './Info'
import '../styles/index.css'

export default function App() {
  const [passwordInfo, setPasswordInfo] = useState({
    length: '12',
    lower: true,
    upper: true,
    number: true,
    symbol: false,
  })

  const [onSetShow, setOnSetShow] = useState(false)

  return (
    <>
      <Header />
      <Form onPasswordSet={setPasswordInfo} onSetShow={setOnSetShow} />
      <Info userPassword={passwordInfo} setShow={onSetShow} />
      <Footer />
    </>
  )
}
