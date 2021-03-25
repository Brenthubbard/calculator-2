
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

// $(document).ready(function () {

//   $("form#add").click(function (event) {
//     event.preventtDefault();
//     const number1 = parseInt($("#add1").val());
//     const number2 = parseInt($("#add2").val());

//     $("addition").click(function () {
//       const result = add(number1, number2);
//       $("#output").text(result);
//     });
//     $("subtraction").click(function () {
//       const result = subtract(number1, number2);
//       $("output").text(result);
//     });
//     $("multiply").click(function () {
//       const result = multiply(number1, number2);
//       ("output").text(result);
//     });
//     $("divide").click(function () {
//       const result = divide(number1, number2);
//       ("output").text(result);
//     });
//   });
// });
$(document).ready(function () {
  $("form#add").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    alert(result);
  });
});