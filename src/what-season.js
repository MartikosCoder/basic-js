const getSeason = date => {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || date.toString.toString() !== 'function toString() { [native code] }') throw new Error();

  const month = date.getMonth();
  const seasons = {
    winter: [0, 1, 11],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10]
  }

  let result = undefined;

  for(let season in seasons) {
    if(seasons[season].includes(month)) {
      result = season;
      break;
    }
  }

  return result;
}

module.exports = getSeason;