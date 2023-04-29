function password(passwordLength, lower, upper) {
  let password = ''
  for (let i = 0; i < passwordLength; i++) {
    if (lower && !upper) {
      password += randomLower()
    } else if (!lower && upper) {
      password += randomUpper()
    }
  }
  console.log(password)
}

function randomLower() {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  return lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)]
}

function randomUpper() {
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)]
}

password(3, true, false)
