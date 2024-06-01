import React, { ChangeEvent, useState, useEffect } from 'react'

import { password } from '../../utils/password'
import { checkStrength } from '../../utils/pw-strength'
import { changeColour } from '../../utils/change-colour'
import { colourText } from './Helpers'
import { CopySvg } from '../../utils/svgs'

export default function Form({ onPasswordSet, onSetShow }) {
  const [passwordInfo, setPasswordInfo] = useState({
    length: '12',
    lower: true,
    upper: true,
    number: true,
    symbol: false,
  })

  const [passwordStrength, setPasswordStrength] = useState('')
  const [colour, setColour] = useState('green')

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target)
    const { id, value, checked } = e.target
    setPasswordInfo((prevInfo) => ({
      ...prevInfo,
      [id]: id === 'length' ? parseInt(value) : checked,
    }))
  }

  const lengthHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordInfo({ ...passwordInfo, [e.target.id]: e.target.value })
    console.log(passwordInfo)
  }

  useEffect(() => {
    const generatedPassword = password(
      passwordInfo.length,
      passwordInfo.lower,
      passwordInfo.upper,
      passwordInfo.number,
      passwordInfo.symbol
    )
    console.log(passwordInfo)
    setThePassword(generatedPassword)
    onPasswordSet(passwordInfo)
    setPasswordStrength(
      checkStrength(
        passwordInfo.length,
        passwordInfo.lower,
        passwordInfo.upper,
        passwordInfo.number,
        passwordInfo.symbol
      )
    )
    setColour(
      changeColour(
        passwordInfo.length,
        passwordInfo.lower,
        passwordInfo.upper,
        passwordInfo.number,
        passwordInfo.symbol
      )
    )
  }, [passwordInfo])

  const [thePassword, setThePassword] = useState('')

  return (
    <>
      <div className="password-div">
        <p>Your Password:</p>
        <h1>{thePassword}</h1>
        <CopySvg width="50px" />
        <p style={{ color: colour }}>
          Your password will be cracked {passwordStrength}
        </p>
      </div>
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
              <label htmlFor="number">Numbers: </label>
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
                  min="1"
                  max="24"
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
      </div>
    </>
  )
}
