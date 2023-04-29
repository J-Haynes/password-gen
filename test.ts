function password(passwordLength, lower, upper) {
  let password = ''
  let options = []
  if (lower) {
    options.push('lower')
  }
  if (upper) {
    options.push('upper')
  }
  for (let i = 0; i < passwordLength; i++) {
    if (lower && !upper) {
      password += randomLower()
    } else if (!lower && upper) {
      password += randomUpper()
    } else if (lower && upper) {
      let rand = options[Math.floor(Math.random() * options.length)]
      switch (rand) {
        case 'lower':
          password += randomLower()
        case 'upper':
          password += randomUpper()
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

password(12, true, true)

let options = ['lower', 'upper']
