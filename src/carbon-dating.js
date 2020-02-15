const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

const dateSample = N => N === `${N}` && !isNaN(+N) && +N > 0 && +N <= 15 ? Math.floor(Math.log(MODERN_ACTIVITY / +N) * HALF_LIFE_PERIOD / 0.693) + 1 : false;

module.exports = dateSample;
