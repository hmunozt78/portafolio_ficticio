function nombre(){
    let nombre=prompt("Hola Visitante... \nCual es tu nombre?");

    if (nombre=="" || nombre===null)
    {
        let presenta = document.getElementById("presentacion").innerHTML="<h1>DESARROLLADOR</h1> <H1>FULL STACK</H1><br><h3>Llevemos tus ideas al siguiente nivel</h3>";
        
    }
    else 
    {
        let presenta = document.getElementById("presentacion").innerHTML=`<h1>DESARROLLADOR</h1> <H1>FULL STACK</H1><br><h3>Hola ${nombre}, hasta donde quieres llevar tu web hoy? </h3>`;
        
    }
}

function validarCorreo() {
    const correo = document.getElementById('recipient-mail').value;
    const contenido = document.getElementById("message-text");

    // Expresión regular para validar el formato del correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexCorreo.test(correo)) {
        alert('Mensaje enviado correctamente, pronto nos comunicaremos con usted');
        //cuerpoMensajeCorreo.innerHTML = "Muchas gracias !!!, te contactaremos pronto!!";
    } else {
        alert('Correo electrónico inválido, intente nuevamente');
        //cuerpoMensajeCorreo.innerHTML = "Correo electrónico inválido";
    }
}


window.onload = function (){
    nombre();
    document.getElementById("enviaFormulario").addEventListener("click", validarCorreo);
}