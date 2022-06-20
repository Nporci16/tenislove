
const listaTienda = []
let cantidad = 10;

do {
    let ingresar = prompt("Ingrese el nombre del producto")
    listaTienda.push(ingresar.toUpperCase());
    alert(listaTienda.length);
}
while(listaTienda.length !=cantidad)

const listaNueva = listaTienda.concat (["joggins","soquetes"])
    alert(listaNueva.join("\n"));