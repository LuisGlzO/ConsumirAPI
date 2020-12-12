const boton = document.getElementById("boton1");

boton.addEventListener('click', () => {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;

    const persona = {
        Nombre: nombre,
        Apellido: apellido,
        Correo: correo
    }

    //console.log(persona)
    //console.log(JSON.stringify(persona))
    fetch('http://127.0.0.1:8000/api/1.0/personas', {
        method: 'POST',
        body: JSON.stringify(persona),
        headers:{
            "Content-type":"application/json"
        }
    }).then(request => request.json())
    .then(jsonData => console.log(jsonData))
    
    //console.log(persona)
    //console.log(JSON.stringify(persona))
    //console.log(nombre)
    //console.log(apellido)
    //console.log(correo)
})