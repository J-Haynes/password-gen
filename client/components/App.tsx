import React, { useState } from 'react'
import Header from './Header'
import Form from './Form'
import Footer from './Footer'
import Reasons from './Reasons'
import Info from './Info'

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
      <Reasons />
      <Footer />
    </>
  )
}
