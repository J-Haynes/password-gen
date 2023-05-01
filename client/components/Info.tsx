import React, { useState } from 'react'
import { password } from '../../password'

import { checkStrength } from '../../pw-strength'

export default function Info({ userPassword, setShow }) {
  return (
    <div className="info-div">
      <p>
        {setShow &&
          checkStrength(
            userPassword.length,
            userPassword.lower,
            userPassword.upper,
            userPassword.number,
            userPassword.symbol
          )}
      </p>
    </div>
  )
}
