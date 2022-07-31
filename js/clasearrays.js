// visto antes de DOM

let nombre
let pedirGasto
let resultado =0;
let porcentajeDescuento =5;


function inicio (){
    nombre = prompt("Ingrese su nombre")
    alert("Bienvenido "+ nombre +" a Tennis Love")
} 

function gasto(){
    pedirGasto = prompt("Ingrese el dinero que va a gastar");
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
    alert("Su descuento puede llegar a ser de "+resultado)
}


inicio()
gasto()
descuento()


const gorras = [];
class Gorra {
    constructor (marca, color, precio) {
        this.marca = marca;
        this.color = color;
        this.precio = precio;
    }
    descuento(calcularDescuento){
        this.precio = this.precio - calcularDescuento;
    }
}

let cantidad = parseInt (prompt("¿Cuantas gorras quiere agregar?"))
    function agregarGorras (arr, cantidad){
        for (let i = 0; i < cantidad; i++) {
            let marca = prompt ("Ingrese la marca de la gorra")
            let color = prompt("Ingrese el color de la gorra")
            let precio = parseInt(prompt("Ingrese el precio de la gorra"))
            arr.push(new Gorra(marca, color, precio))
        }
    }

function mostrarGorras (arr){
    arr.forEach(producto => {
        alert ("Marca: " + producto.marca + " Color: " + producto.color + " Precio: $" + producto.precio)
    })
}

agregarGorras (gorras,cantidad)
mostrarGorras (gorras)

let operacion = prompt ("¿Que producto desea adquirir?")


let gorrasAelegir = gorras.filter((producto)=>producto.marca == operacion);
let mensaje = ''
gorrasAelegir.forEach(producto=>{
    mensaje += "Se agrego a tu carrito " + "Marca: " + producto.marca + " Color: " + producto.color + " Precio: " + producto.precio
});
alert(mensaje);


/* remeras

<h3>Remeras</h3>
                <div class="imgtenis">
                    <div class="card" style="width: 18rem;">
                        <img src="../img/remeraadidass.jfif"card-img-top" alt="Remera Adidas">
                        <div class="card-body">
                            <h5 class="card-title">Remera Adidas Tenis Club</h5>
                            <p class="card-text">$ 7.499</p>
                            <a href="#" class="btn btn-primary">Agregar al carrito</a>
                        </div>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <img src="../img/remeranikenadal.jfif"card-img-top" alt="Remera Nadal Nike">
                        <div class="card-body">
                            <h5 class="card-title">Remera Nadal Nike</h5>
                            <p class="card-text">$ 8.271</p>
                            <a href="#" class="btn btn-primary">Agregar al carrito</a>
                        </div>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <img src="../img/remeralacoste.jfif" class="card-img-top" alt="Gorra Lacoste">
                        <div class="card-body">
                            <h5 class="card-title">Remera Lacoste Djokovic</h5>
                            <p class="card-text">$ 10.309</p>
                            <a href="#" class="btn btn-primary">Agregar al carrito</a>
                        </div>
                    </div>
*/

