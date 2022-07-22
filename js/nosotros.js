let formulario = document.getElementById("formulario")
formulario.innerHTML=`
<form id="formu">
                    <input id = "name" type="text">
                    <input id = "edad" type="number">
                    <input type="submit" value="Enviar">
                </form>
`
let input1 = document.getElementById("name");
let input2 = document.getElementById("edad");
input1.onchange = () =>{console.log (name)};
input2.onchange = () =>{console.log (edad)};



let miFormu = document.getElementById("formu");
miFormu.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");
}



