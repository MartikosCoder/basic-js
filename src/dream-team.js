const createDreamTeam = members => Array.isArray(members) ? members.map(name => typeof name === 'string' ? (name.trim())[0].toUpperCase() : '').sort().join('') : false;

module.exports = createDreamTeam;