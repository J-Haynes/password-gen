import React from 'react'
// import hsimp from 'hsimp'

export function colourText(text: string) {
  if (Number(text) >= 8 && Number(text) <= 12) {
    return <span className="red-text">{text}</span>
  } else if (Number(text) > 12 && Number(text) < 16) {
    return <span className="orange-text">{text}</span>
  } else if (Number(text) >= 16) {
    return <span className="green-text">{text}</span>
  }
}

// export function checkPassword(password) {
//   return hsimp(password)
// }
