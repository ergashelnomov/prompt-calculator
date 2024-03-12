let num1 = prompt("birinchi raqam");
let sym = prompt("matimatik amal");
let num2 = prompt("ikkinchi raqam");

if (sym == "+") {
  alert(+num1 + +num2);
} else if (sym == "-") {
  alert(+num1 - +num2);
} else if (sym == "*") {
  alert(+num1 * +num2);
} else if (sym == "/") {
  alert(+num1 / +num2);
} else {
  alert("error");
}
