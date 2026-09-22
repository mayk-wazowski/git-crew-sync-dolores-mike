function isValidShift(hours) {

  return hours > 0 && hours <= 24;

}

function calculatePay(hours, rate) {

  if (hours > 8) {
    return Math.round((8 * rate) + ((hours - 8) * rate * 1.5));
  }

  return Math.round(hours * rate);

}

module.exports = { isValidShift, calculatePay };