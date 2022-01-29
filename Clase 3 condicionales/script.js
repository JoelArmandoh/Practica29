
function parOimpar(numero) {

    numero = parseInt(numero);
    if (numero%2 == 0) {
        console.log("El numero es par");
        document.getElementById("numero").style.color="green"
        document.getElementById("numero").style.border="1px solid green"
    }
    else {

        console.log("El numero no es par");
        document.getElementById("numero").style.color="red"
        document.getElementById("numero").style.border=" 1px solid red"
        
    }
}



function ValidarUsuario(usuario) {

    if (usuario.length >= 8) {
        console.log("usuario no valido");
        document.getElementById("usuario").style.border="2px solid green "
        document.getElementById("usuario").style.color="green"
    }
else {

    document.getElementById("usuario").style.border="1px solid #ff0000"
    document.getElementById("usuario").style.color="#ff0000"

    }
}