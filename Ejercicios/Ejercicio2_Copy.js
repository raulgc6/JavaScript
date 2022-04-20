var a = 80
var b = -5
var porcentaje

var tipo1 = typeof(a)
var tipo2 = typeof(b)
var sonNumbers = (tipo1 != "number") && (tipo2 != "number")

if (sonNumbers) {
    var sonValidos = (a > 0 && b >= 0 && b <= a)

    if (sonValidos) {
        porcentaje = b/a * 100 
        console.log(`El porcentaje de que representa b sobre a es igual a ${porcentaje}%`);
    } else {
        if (a <= 0) {
            console.log(`El valor de a tiene que ser mayor que cero. Valor actual ${a}`);
        }
        if (b < 0) {
            console.log(`El valor de b tiene que ser mayor que cero. Valor actual ${b}`);
        }
        if (b > a){
            console.log(`El numbero b (${b}) es mayor que el numero a (${a})`);
        }
    }
} else {
    if (tipo1 != "number")  {
        console.log(`El valor de a es ${a} y su tipo es ${tipo1}`);
    }
    if (tipo2 != "number")  {
        console.log(`El valor de b es ${b} y su tipo es ${tipo2}`);
    }
}

