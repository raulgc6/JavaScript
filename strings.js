var bienvebida = "Hola Alain"
console.log('He sadi: \"' + bienvebida + `\"`);
console.log("He said: " + bienvebida);
console.log(`He said ${bienvebida}`);

var query = `Select * from table where ciudad = "${bienvebida}"`
console.log(query)

var n=4
var toStr = n.toString()
console.log(typeof(n), typeof(toStr));

var booleanValue = false
console.log(booleanValue)
var convertedString = String(booleanValue)
console.log(convertedString)
var backToBoolean = Boolean(convertedString)
console.log(backToBoolean)

console.log(4 + 'hola')
console.log( -5 % 2 )
console.log(4 == '4')
console.log(4 === '4')