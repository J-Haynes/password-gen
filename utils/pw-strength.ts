export function checkStrength(
  passwordLength: string,
  lower: boolean,
  upper: boolean,
  number: boolean,
  symbol: boolean
): string {
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

  ///////////const minutes = seconds / 60
  /////////////const hours = seconds / 7200
  //////////////const days = seconds / 86400
  /////////////const weeks = seconds / 604800
  ////////////const months = seconds / 2628000
  /////////////const years = seconds / 31540000
  ///////////const century = seconds / 3154000000
  /////////const millenium = seconds / 31540000000
  //////const millionYears = seconds / 31540000000000
  //////const billionYears = seconds / 31540000000000000
  /////const trillionYears = seconds / 31540000000000000000
  //const quadrillionYears = seconds / 31540000000000000000000

  if (seconds < 1) {
    return 'instantly'
  } else if (seconds > 1 && seconds < 2) {
    return `in one second`
  } else if (seconds >= 2 && seconds < 60) {
    return `in ${Math.trunc(seconds)} seconds`
  } else if (seconds > 60 && seconds < 120) {
    return `in one minute`
  } else if (seconds >= 120 && seconds < 3600) {
    return `in ${Math.trunc(seconds / 60)} minutes`
  } else if (seconds >= 3600 && seconds < 7200) {
    return `in one hour`
  } else if (seconds >= 7200 && seconds < 86400) {
    return `in ${Math.trunc(seconds / 7200)} hours`
  } else if (seconds >= 86400 && seconds < 172800) {
    return `in one day`
  } else if (seconds >= 172800 && seconds < 604800) {
    return `in ${Math.trunc(seconds / 86400)} days`
  } else if (seconds >= 604800 && seconds < 1209600) {
    return `in one week`
  } else if (seconds >= 1209600 && seconds < 2628000) {
    return `in ${Math.trunc(seconds / 604800)} weeks`
  } else if (seconds >= 2628000 && seconds < 5256000) {
    return `in one month`
  } else if (seconds >= 5256000 && seconds < 31540000) {
    return `in ${Math.trunc(seconds / 2628000)} months`
  } else if (seconds >= 31540000 && seconds < 63080000) {
    return `in one year`
  } else if (seconds >= 63080000 && seconds < 3154000000) {
    return `in ${Math.trunc(seconds / 31540000)} years`
  } else if (seconds >= 3154000000 && seconds < 6308000000) {
    return `in one hundred years`
  } else if (seconds >= 6308000000 && seconds < 31540000000) {
    return `in ${Math.trunc(seconds / 3154000000)} centuries`
  } else if (seconds >= 31540000000 && seconds < 63080000000) {
    return `in one thousand years`
  } else if (seconds >= 63080000000 && seconds < 31540000000000) {
    return `in ${Math.trunc(seconds / 31540000000)} thousand years`
  } else if (seconds >= 31540000000000 && seconds < 63080000000000) {
    return `in one million years`
  } else if (seconds >= 63080000000000 && seconds < 31540000000000000) {
    return `in ${Math.trunc(seconds / 31540000000000)} million years`
  } else if (seconds >= 31540000000000000 && seconds < 63080000000000000) {
    return `in one billion years`
  } else if (seconds >= 63080000000000000 && seconds < 31540000000000000000) {
    return `in ${Math.trunc(seconds / 31540000000000000)} billion years`
  } else if (
    seconds >= 31540000000000000000 &&
    seconds < 63080000000000000000
  ) {
    return `in one trillion years`
  } else if (
    seconds >= 63080000000000000000 &&
    seconds < 31540000000000000000000
  ) {
    return `in ${Math.trunc(seconds / 31540000000000000000)} trillion years`
  } else if (
    seconds >= 31540000000000000000000 &&
    seconds < 63080000000000000000000
  ) {
    return `in one quadrillion years`
  } else if (seconds > 63080000000000000000000) {
    return `${Math.trunc(seconds / 31540000000000000000000)} quadrillion years`
  } else {
    return ''
  }
}
