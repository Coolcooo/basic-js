const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const sortedMembers = members.map(e => {
    if (typeof e === 'string')
      return e.replace(/\s+/g, '')[0].toUpperCase();
  }).sort();
  console.log(sortedMembers)
   const dreamTeam = sortedMembers.join('');
  if(dreamTeam === '') {
    return false;
  }
  return dreamTeam;

};
console.log(module.exports(['     sdf','  sdfd sf',' ghjfh',123,false]))