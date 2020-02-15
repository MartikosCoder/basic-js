const countCats = field => field.flat().filter(elem => elem === "^^").length;

module.exports = countCats;
