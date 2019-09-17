$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#voter').show();
  } else if (age === 18) {
    alert("For god's sake, please vote!");
    $('#voter').show();
  } else {
    $('#nonVoter').show();
  }
});
