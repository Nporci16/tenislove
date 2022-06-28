// UTILIZANDO DOM

// productos arrays

const gorras = [
    {id:1, nombre: "Gorra Negra Adidas Bball 3S", precio: 5269, marca: "Adidas", img: "../img/gorratenisadidas.webp"},
    {id:2, nombre: "Gorra Nike AEROBILL L91 PERF", precio: 6271, marca: "Nike", img: "../img/gorraniketenis.webp"},
    {id:3, nombre: "Lacoste Gorra Contrast Strap Cotton", precio: 6309, marca: "Lacoste", img: "../img/gorralacostetenis.jpg"}
]
// carrito

const carrito =[]


let productos = document.getElementById("productos")
productos.innerHTML=`
<div>
    <h3>Gorras</h3>
        <div class="imgtenis">
            <div class="card" style="width: 18rem;">
                <img src="${gorras[0].img}" class="card-img-top" alt="Gorra Adidas">
                <div class="card-body">
                    <h5 class="card-title">${gorras[0].nombre}</h5>
                    <p class="card-text">${gorras[0].marca}
                    <p class="card-text">${gorras[0].precio}</p>
                    <button id="comprar" class="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="${gorras[1].img}" class="card-img-top" alt="Gorra Nike">
                <div class="card-body">
                    <h5 class="card-title">${gorras[1].nombre}</h5>
                    <p class="card-text">${gorras[1].marca}
                    <p class="card-text">${gorras[1].precio}</p>
                    <button id="comprar" class="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="${gorras[2].img}" class="card-img-top" alt="Gorra Lacoste">
                <div class="card-body">
                    <h5 class="card-title">${gorras[2].nombre}</h5>
                    <p class="card-text">${gorras[2].marca}
                    <p class="card-text">${gorras[2].precio}</p>
                    <button id="comprar" class="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
        </div>
                
</div>

`
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
                                        <li><a class="dropdown-item" href="./pages/torneos.html">Noticias</a></li>
                                        <li><a class="dropdown-item" href="./miami.html">Miami Open</a></li>
                                        <li><a class="dropdown-item" href="./pages/torneos/montecarlo.html">Montecarlo</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="./pages/torneos/rolandgarros.html">Roland Garros</a></li>
                                    </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Tienda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Nosotros</a>
                            </li>
                        </ul>
                        <i class="fa-solid fa-cart-circle-plus"></i>
                        
                    </div>
                </div>
            </nav>
`




