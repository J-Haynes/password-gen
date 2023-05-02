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
            Your password will be cracked{' '}
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
        <div className="info-div">
          <p>
            Modern super computers can make 40 billion password guesses per
            second
          </p>
          <p>
            A long, complex password is one way to protect yourself when when
            your data leaks
          </p>
        </div>
      )}
    </>
  )
}
