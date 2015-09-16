var countBy = function(goalNumber,countByNumber) {
  var results = [];
  for (var i = countByNumber; i <= goalNumber; i += countByNumber) {
    results.push(i);
  }
  return results;
}
