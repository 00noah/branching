$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    var a1 = parseInt($("#q1").val());
    var a2 = parseInt($("#q2").val());
    var a3 = parseInt($("#q3").val());
    var results = a1 + a2 + a3;
    console.log(results);
    $(".results").show();
      if (results < "4") {
            $(".liberal").show();
}
console.log("test2")

  });
});
