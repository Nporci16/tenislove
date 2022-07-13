// UTILIZANDO DOM

// productos arrays

const gorras = [
    {id:0, nombre: "Gorra Negra Adidas Bball 3S", precio: 5269, marca: "Adidas", img: "../img/gorratenisadidas.webp"},
    {id:1, nombre: "Gorra Nike AEROBILL L91 PERF", precio: 6271, marca: "Nike", img: "../img/gorraniketenis.webp"},
    {id:2, nombre: "Lacoste Gorra Contrast Strap Cotton", precio: 6309, marca: "Lacoste", img: "../img/gorralacostetenis.jpg"}
]
//LocalStore+JSON del Array

localStorage.setItem("gorras", JSON.stringify(gorras))

// carrito

const carrito =[]

// operador logico and

if (carrito.length === 0){
    console.log("Carrito esta vacio")
}
//con operador AND
carrito.length === 0 && console.log("carrito esta vacio")

//spread del array
console.log(...gorras)

// acceso condicional  a un objeto
const usuario = {
    nombre: "Juan Martinez",
    edad: 28,
    tarjetaDeCredito: {
        visa:"aprobado"
    }
}
console.log(usuario?.tarjetaDeCredito?.visa || "la propiedad existe")
// aprobado
console.log(usuario?.otrasTarjetas?.mastercard || "la propiedad no existe")

//desestructuracion de arrays
const [a, b]= gorras
console.log(a) // Gorra Negra Adidas Bball 3S
// DOM

//let productos = document.getElementById("productos")
let productos = document.getElementById("productos")
let productoProd = document.getElementById("productoCarrito")

gorras.forEach(gorra => {
    let producto = document.createElement("div")
    producto.className="col-12 col-sm-3 pt-5"
    producto.innerHTML=`
    <div>
        <div class="card" style="width: 18rem;">
            <img src="${gorra.img}" class="card-img-top" alt="Gorra Adidas">
            <div class="card-body">
                <h5 class="card-title">${gorra.nombre}</h5>
                <p class="card-text">Marca: <mark>${gorra.marca}
                <p class="card-text">Precio: <strong>$${gorra.precio}</p>
                <button id="comprar" onclick="Comprar(${gorra.id})" class="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
    </div>
    
    `
    productos.append(producto)
});


// NAV

let nav = document.getElementById("nav")
nav.innerHTML=`
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="v-line"></div>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">TennisLove</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../index.html">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="pages/ranking.html">Ranking</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Torneos
                                </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="./torneos.html">Noticias</a></li>
                                        <li><a class="dropdown-item" href="./miami.html">Miami Open</a></li>
                                        <li><a class="dropdown-item" href="./montecarlo.html">Montecarlo</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="./rolandgarros.html">Roland Garros</a></li>
                                    </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Tienda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./nosotros.html">Nosotros</a>
                            </li>
                        </ul>
                        <i class="fa-solid fa-cart-circle-plus"></i>
                        
                    </div>
                </div>
            </nav>
`

//agregar carrito con fallas

const Comprar = (x) =>{
carrito.push(gorras[x])
console.log(carrito)
carrito.forEach(gorra => {
    let producto = document.createElement("div")
    producto.className="col-12 col-sm-3 pt-5"
    producto.innerHTML=`
    <div>
        <div class="card w-75">
        <div class="card-body">
            <h5 class="card-title">${gorra.nombre}</h5>
            <p class="card-text">Marca: <mark>${gorra.marca}
            <p class="card-text">Precio: <strong>$${gorra.precio}</p>
            <button type=reset id="vaciar" class="btn btn-primary">Quitar del carrito</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    
    `
    productoProd.append(producto)
});
//alert("se agrego al carrito de compras")
}



