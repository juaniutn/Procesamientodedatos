const formulario = document.querySelector("#formu");

//Crear el evento
formulario.addEventListener("submit", validarFormulario)


//Mis funciones
function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const apellido = document.querySelector("#apellido").value
    const dni = document.querySelector("#dni").value
    const fn = document.querySelector("#fn").value
    const domicilio = document.querySelector("#domicilio").value
    const localidad = document.querySelector("#localidad").value

    const respuesta = document.getElementById("respuesta")
    genero = document.getElementsByName("sexo").value;
    const radio = document.getElementsByName("sexo")
    box1 = document.getElementById("box1").value;
    box2 = document.getElementById("box2").value;
    box3 = document.getElementById("box3").value;
    box4 = document.getElementById("box4").value;

    const lenguajes = document.getElementsByName("lenguajes")
    var lengu = " ";
    for(var i = 0; i<lenguajes.length; i++){
        if(lenguajes[i].checked){
            lengu = lenguajes[i].value + lengu; 
        }
    }
    
    for(var i = 0; i<radio.length; i++){
        if(radio[i].checked){
            
            var genero = radio[i].value;
            break;
        }
    }

    
    respuesta.textContent = `Los datos enviados son: ${nombre}, ${apellido}
    ${dni}, ${fn}, ${domicilio}, ${localidad}, ${genero}, ${lengu}`
    console.log(nombre, apellido, dni, fn, domicilio, localidad)
}