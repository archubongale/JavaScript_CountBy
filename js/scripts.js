var countBy = function(goalNumber,countByNumber) {
  var results = [];
  for (var i = countByNumber; i <= goalNumber; i += countByNumber) {
    results.push(i);
  }
  return results;
}


$(document).ready(function() {
  $("form#countBy").submit(function(event) {
    
    var goalNumber = parseInt($("input#goalNumber").val());
    var countByNumber = parseInt($("input#countByNumber").val());
    var result = countBy(goalNumber, countByNumber);
    $(".output").text(result);

    $("#result").show();
      event.preventDefault();
  });
});
