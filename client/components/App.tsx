import React, { useState } from 'react'
import Header from './Header'
import Form from './Form'
import Footer from './Footer'
import Reasons from './Reasons'
import Info from './Info'

import { passwordModel } from '../../models/password'

export default function App() {
  const [passwordInfo, setPasswordInfo] = useState({
    length: '16',
    lower: true,
    upper: true,
    number: true,
    symbol: true,
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
