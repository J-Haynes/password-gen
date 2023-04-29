import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import { passwordModel } from '../../models/password'

import { password } from '../../password'

export default function Form() {
  const [passwordInfo, setPasswordInfo] = useState({
    length: '16',
    lower: true,
    upper: true,
    number: true,
    symbol: true,
  })

  const [show, setShow] = useState(false)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target
    setPasswordInfo({ ...passwordInfo, [id]: checked })
    console.log(passwordInfo)
  }

  const lengthHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordInfo({ ...passwordInfo, [e.target.id]: e.target.value })
    console.log(passwordInfo)
  }

  const submitHandler = (e: SubmitEvent) => {
    e.preventDefault()
    setShow(true)
    setThePassword(
      password(
        passwordInfo.length,
        passwordInfo.lower,
        passwordInfo.upper,
        passwordInfo.number,
        passwordInfo.symbol
      )
    )
  }

  const [thePassword, setThePassword] = useState('hello')

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <label htmlFor="length">Length</label>
        <input
          type="range"
          id="length"
          name="length"
          min="8"
          max="32"
          onChange={lengthHandler}
          value={passwordInfo.length}
        />
        <label htmlFor="lower">Lowercase letters: </label>
        <input
          type="checkbox"
          id="lower"
          name="lower"
          onChange={changeHandler}
          value={passwordInfo.lower}
          checked={passwordInfo.lower}
        />

        <label htmlFor="upper">Uppercase letters: </label>
        <input
          type="checkbox"
          id="upper"
          name="upper"
          onChange={changeHandler}
          value={passwordInfo.upper}
          checked={passwordInfo.upper}
        />

        <label htmlFor="upper">Numbers: </label>
        <input
          type="checkbox"
          id="number"
          name="number"
          onChange={changeHandler}
          value={passwordInfo.number}
          checked={passwordInfo.number}
        />

        <label htmlFor="symbol">Symbols: </label>
        <input
          type="checkbox"
          id="symbol"
          name="symbol"
          onChange={changeHandler}
          value={passwordInfo.symbol}
          checked={passwordInfo.symbol}
        />

        <button>password</button>
      </form>
      <div>{show && <p>{thePassword}</p>}</div>
    </div>
  )
}
