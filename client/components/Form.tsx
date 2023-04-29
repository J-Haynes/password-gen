import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import { passwordModel } from '../../models/password'

export default function Form() {
  const [passwordInfo, setPasswordInfo] = useState({
    length: '16',
    lower: true,
    upper: true,
    symbol: true,
  })

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target
    setPasswordInfo({ ...passwordInfo, [id]: checked })
    console.log(passwordInfo)
  }

  const lengthHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordInfo({ ...passwordInfo, [e.target.id]: e.target.value })
    console.log(passwordInfo)
  }

  return (
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
  )
}
