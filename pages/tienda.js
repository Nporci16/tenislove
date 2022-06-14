let nombre
let pedirGasto
let resultado =0;
let porcentajeDescuento =5;


function inicio (){
    nombre = prompt("Ingrese su nombre")
    alert("Bienvenido "+ nombre +" a Tennis Love")
}

function gasto(){
    pedirGasto = prompt("Ingrese el dinero que va a gastar")
    while(pedirGasto<=0){
        pedirGasto = prompt("Importe ingresado no es valido. Ingreselo nuevamente.")
    }
    pedirGasto = parseInt(pedirGasto)
}

function descuento(){
    if(pedirGasto >5000){
        alert("Por tu compra mayor a $5000 tenes un descuento del "+ porcentajeDescuento+"%")
        calcularDescuento(pedirGasto, porcentajeDescuento)
        mostrarDescuento (resultado)
    } else{
        alert ("Para tener un descuento debes superar la compra de $5000")
    }
}

function calcularDescuento (pedirGasto, multiplicador){
    resultado = pedirGasto * multiplicador / 100
    console.log(pedirGasto)
    console.log(multiplicador/100)
}
function mostrarDescuento(mensaje){
    alert("Su descuento es de "+resultado)
}


inicio()
gasto()
descuento()
