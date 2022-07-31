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

// STOCK

const gorras = [
    {id:0, nombre: "Gorra Negra Adidas", cantidad: 1, precio: 5500, marca: "Adidas", img: "../img/gorratenisadidas.webp"},
    {id:1, nombre: "Gorra Negra Nike", cantidad: 1, precio: 6000, marca: "Nike", img: "../img/gorraniketenis.webp"},
    {id:2, nombre: "Lacoste Blanca Gorra", cantidad: 1, precio: 6250, marca: "Lacoste", img: "../img/gorralacostetenis.jpg"}
]

const contenedorCarrito = document.getElementById('carrito-contenedor')

// CARRITO MODAL

const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const cantidadTotal = document.getElementById('cantidadTotal')
const precioTotal = document.getElementById('precioTotal')





let carrito = []

// MANTENER LA INFO GUARDADA EN LA WEB DEL CARRITO

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

// VACIAR DEL CARRRITO

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

// Traer informarcion del Stock

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
                <p class="precioProducto">Precio: <strong>$${gorra.precio}</p>
                <button id="agregar${gorra.id}" class="boton-agregar">Agregar al carrito<i class="fas fa-shopping-cart"></i></button>
            </div>
        </div>
    </div>
    
    `
    productos.append(producto)

    const boton = document.getElementById(`agregar${gorra.id}`)

    boton.addEventListener('click', () => {
    agregarAlCarrito(gorra.id)
    })
});

//AGREGAR PRODUCTOS AL CARRITO+ALERT+ SUMAR PRODUCTOS IGUALES

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)
    Toastify({

        text: "Se agrego al carrito de compras",
        
        duration: 2000
        
        }).showToast();
    
    console.log(carrito)
    if(existe){
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else {
    const item = gorras.find((prod) => prod.id === prodId)
    carrito.push(item)
    
}
actualizarCarrito()
}

// ELIMINAR PRODUCTOS DEL CARRITO


const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

// ACTUALIZAR INFO DEL CARRITO DESDE LOS BOTONES AGREGAR/BORRAR/VACIAR

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick ="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    // SUMAR CANTIDAD DE PRODUCTOS

    contadorCarrito.innerText = carrito.length
    // SUMAR TOTAL DE PRECIOS
    precioTotal.innerText = carrito.reduce ((acc, prod) => acc + prod.precio * prod.cantidad, 0)
}


