import React from 'react'

import { checkStrength } from '../../pw-strength'
import { changeColour } from '../../change-colour'

export default function Info({ userPassword, setShow }) {
  const colour = changeColour(
    userPassword.length,
    userPassword.lower,
    userPassword.upper,
    userPassword.number,
    userPassword.symbol
  )

  const divName = `info-div-${colour}`
  return (
    <>
      {setShow ? (
        <div className={divName}>
          <p style={{ color: colour }}>
            {checkStrength(
              userPassword.length,
              userPassword.lower,
              userPassword.upper,
              userPassword.number,
              userPassword.symbol
            )}
          </p>
        </div>
      ) : (
        <div className="info-div"></div>
      )}
    </>
  )
}
