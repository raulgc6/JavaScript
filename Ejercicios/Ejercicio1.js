var a = 1
var b = 1

if (a == b){
    if (a === b){
        console.log(`Los datos son iguales y del mismo tipo, ya que a es igual a ${a} y es un ${typeof(a)} y b es igual a ${b} y es del tipo ${typeof(b)}`);
    }else{
        console.log(`Los datos son iguales pero de distinto tipo, ya que a es un ${typeof(a)} y b es del tipo ${typeof(b)}`);
    }
}else{
    console.log(`Los datos NO son iguales, ya que a es igual a ${a} y b es igual a ${b}`);
}

