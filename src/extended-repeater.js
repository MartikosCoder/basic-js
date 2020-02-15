const repeater = (
  str,
  {
    repeatTimes,
    separator = "+",
    addition = "",
    additionRepeatTimes,
    additionSeparator
  }
) => {
  return Array(repeatTimes)
    .fill(
      `${str}${Array(additionRepeatTimes)
        .fill(`${addition}`)
        .join(additionSeparator)}`
    )
    .join(separator);
};

module.exports = repeater;
