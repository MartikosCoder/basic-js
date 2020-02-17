const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

const dateSample = N => {
    const parsed = parseFloat(N);
    return N === `${N}` && !isNaN(parsed) && parsed > 0 && parsed <= 15 ? Math.floor(Math.log(MODERN_ACTIVITY / parseFloat(N)) * HALF_LIFE_PERIOD / 0.693) + 1 : false;
}

module.exports = dateSample;
