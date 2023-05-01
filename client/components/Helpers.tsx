import React from 'react'

export function colourText(text: string) {
  if (Number(text) >= 1 && Number(text) <= 8) {
    return <span className="red-text">{text}</span>
  } else if (Number(text) > 8 && Number(text) < 12) {
    return <span className="orange-text">{text}</span>
  } else if (Number(text) >= 12) {
    return <span className="green-text">{text}</span>
  }
}
