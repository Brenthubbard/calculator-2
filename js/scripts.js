
// Business logic:

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// User interface logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
   event.preventtDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });

  // $("form#subtract").submit(function(event) {
  //   event.preventDefault();
  //   const number1 = parseInt($("#subtract1").val());
  //   const number2 = parseInt($("#subtract2").val());
  //   const result = subtract(number1, number2);
  //   $("#output").text(result);
  
  // });
});