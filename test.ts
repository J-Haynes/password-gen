function password(passwordLength, lower, upper, number, special) {
  let password = ''
  let options = []
  const options1 = [...arguments]
  console.log(options1)
  if (lower) {
    options.push('lower')
  }
  if (upper) {
    options.push('upper')
  }
  if (number) {
    options.push('number')
  }
  if (special) {
    options.push('special')
  }
  for (let i = 0; i < passwordLength; i++) {
    const rand = options[Math.floor(Math.random() * options.length)]
    switch (rand) {
      case 'lower':
        password += randomLower()
        break
      case 'upper':
        password += randomUpper()
        break
      case 'number':
        password += randomNumber()
        break
      case 'special':
        password += randomSpecial()
        break
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

function randomNumber() {
  const numbers = '0123456789'
  return numbers[Math.floor(Math.random() * numbers.length)]
}

function randomSpecial() {
  const specialAlphabet = `!@#$%^&*()<>?/;':"[]{}|-_=+`
  return specialAlphabet[Math.floor(Math.random() * specialAlphabet.length)]
}

password(12, true, false, false, false)
password(12, false, true, false, false)
password(12, false, false, true, false)
password(12, true, true, true, true)
