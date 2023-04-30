import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import { passwordModel } from '../../models/password'

import { password } from '../../password'
import { colourText } from './Helpers'

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
      <div className="form-div">
        <div className="labels-div">
          <div className="label-div">
            <label htmlFor="length">
              Length: {colourText(passwordInfo.length)}
            </label>
          </div>

          <div className="label-div">
            <label htmlFor="lower">Lowercase letters: </label>
          </div>

          <div className="label-div">
            <label htmlFor="upper">Uppercase letters: </label>
          </div>

          <div className="label-div">
            <label htmlFor="upper">Numbers: </label>
          </div>

          <div className="label-div">
            <label htmlFor="symbol">Symbols: </label>
          </div>
        </div>
        <div className="inputs-div">
          <form className="password-form">
            <div className="input-div">
              <input
                type="range"
                id="length"
                name="length"
                min="8"
                max="32"
                onChange={lengthHandler}
                value={passwordInfo.length}
              />
            </div>
            <div className="input-div">
              <input
                type="checkbox"
                id="lower"
                name="lower"
                onChange={changeHandler}
                value={passwordInfo.lower}
                checked={passwordInfo.lower}
              />
            </div>
            <div className="input-div">
              <input
                type="checkbox"
                id="upper"
                name="upper"
                onChange={changeHandler}
                value={passwordInfo.upper}
                checked={passwordInfo.upper}
              />
            </div>
            <div className="input-div">
              <input
                type="checkbox"
                id="number"
                name="number"
                onChange={changeHandler}
                value={passwordInfo.number}
                checked={passwordInfo.number}
              />
            </div>
            <div className="input-div">
              <input
                type="checkbox"
                id="symbol"
                name="symbol"
                onChange={changeHandler}
                value={passwordInfo.symbol}
                checked={passwordInfo.symbol}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="button-div">
        <button onClick={submitHandler}>password</button>
      </div>
      <div className="password-div">
        {show ? (
          <p>{thePassword}</p>
        ) : (
          <p>Your new password will generate here...</p>
        )}
      </div>
    </div>
  )
}
