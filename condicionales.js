var s1 = 5;
var s2 = s1;
if (s1 > s2 || s1 < s2) {
  console.log(`s1 es mayor que s2. Valor de s1: ${s1}, valor de s2 ${s2}`);
} /*else if (s1<s2){
    console.log(`s2 es mayor que s1. Valor de s1: ${s1}, valor de s2 ${s2}`)
}*/ else {
  console.log(`s2 es igual a s1`);
}

var characterPresionado = "a";
/*if (characterPresionado === "a") {
  console.log("El usuario ha presionado la tecla a");
} else if (characterPresionado === "e") {
  console.log("El usuario ha presionado la tecla e");
} else if (characterPresionado === "i") {
  console.log("El usuario ha presionado la tecla i");
} else if (characterPresionado === "o") {
  console.log("El usuario ha presionado la tecla o");
} else if (characterPresionado === "u") {
  console.log("El usuario ha presionado la tecla u");
}
*/

switch (characterPresionado) {
  case "a":
    console.log("El usuario ha presionado la tecla a");
    break;
  case "e":
    console.log("El usuario ha presionado la tecla e");
    break;
  case "i":
    console.log("El usuario ha presionado la tecla i");
    break;
  case "o":
    console.log("El usuario ha presionado la tecla o");
    break;
  case "u":
    console.log("El usuario ha presionado la tecla u");
    break;
  default:
    break;
}
