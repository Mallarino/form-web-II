

function Obtener() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let correo = document.getElementById("correo").value;

    if(correo == "" || contraseña == "" || usuario == ""){
        alert("completa todos los campos !");
    }

    if (contraseña != "" && usuario != "" && correo != "") {
        alert(`bienvenido ${usuario} !`)
        
        usuario = document.getElementById("usuario").value = "";
        contraseña = document.getElementById("contraseña").value = "";
        correo = document.getElementById("correo").value = "";
    }
}       