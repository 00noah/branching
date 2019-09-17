$(document).ready(function() {
  $("#animalSelection").submit(function(event) {
    event.preventDefault();
    var animalSelection = $("#AnimalChoice").val();
    if (animalSelection === "1") {
      $(".turtle").show();
    } else if (animalSelection === "2") {
      $(".snake").show();
    } else if (animalSelection === "3") {
      $(".insect").show();
    } else {
      alert("You didn't select anything");
    }
  });
});
