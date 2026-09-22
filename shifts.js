function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {

  if (hours < 0) {
    return 0;
  }

  if (hours > 8) {
    return Math.floor((8 * rate) + ((hours - 8) * rate * 1.5));
  }

  return Math.floor(hours * rate);
}

module.exports = { isValidShift, calculatePay };