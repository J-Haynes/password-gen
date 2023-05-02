export function changeColour(passwordLength, lower, upper, number, symbol) {
  let chars = 0
  if (lower) {
    chars += 26
  }
  if (upper) {
    chars += 26
  }
  if (number) {
    chars += 10
  }
  if (symbol) {
    chars += 27
  }
  const possible = chars ** passwordLength

  const seconds = possible / 40000000000

  if (seconds >= 0 && seconds < 2628000) {
    return 'red'
  } else if (seconds >= 2628000 && seconds < 31540000) {
    return 'orange'
  } else {
    return 'green'
  }
}
