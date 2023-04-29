function password(passwordLength, lower, upper, special) {
  let password = ''
  let options = []
  if (lower) {
    options.push('lower')
  }
  if (upper) {
    options.push('upper')
  }
  if (special) {
    options.push('special')
  }
  for (let i = 0; i < passwordLength; i++) {
    if (lower && !upper) {
      password += randomLower()
    } else if (!lower && upper) {
      password += randomUpper()
    } else if (lower && upper) {
      const rand = options[Math.floor(Math.random() * options.length)]
      switch (rand) {
        case 'lower':
          password += randomLower()
          break
        case 'upper':
          password += randomUpper()
          break
        case 'special':
          password += randomSpecial()
          break
      }
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

function randomSpecial() {
  const specialAlphabet = `!@#$%^&*()<>?/;':"[]{}|-_=+`
  return specialAlphabet[Math.floor(Math.random() * specialAlphabet.length)]
}

password(12, true, true, true)
