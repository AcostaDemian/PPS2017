function agregar()
    {
        $.ajax({
                    type:"POST",
                    dataType: "json",
                    url:"./index.php/persona/guardar",
                    data: {
                        "nombre" : document.getElementById("nombreOtro").value,
                        "apellido" : document.getElementById("apellidoOtro").value,
                        "dni" : document.getElementById("dniOtro").value
                    }
                })
                .done(function(respuesta){
                    alert("Agrego correctamente");
                    console.log(respuesta);
                })
                .fail(function(error){
                    alert("Hay un error");
                });				
    }	

function modificar()
    {
        $.ajax({
                    type:"PUT",
                    dataType: "json",
                    url:"./index.php/persona/modificar",
                    data: {
                        "nombre" : document.getElementById("nombreOtro").value,
                        "apellido" : document.getElementById("apellidoOtro").value,
                        "id" : document.getElementById("idOtro").value
                    }
                })
                .done(function(respuesta){
                    alert("Modifico correctamente");
                    console.log(respuesta);
                })
                .fail(function(error){
                    alert("Hay un error");
                });	
                
    }

function borrar()
    {
        $.ajax({
                    type:"DELETE",
                    dataType: "json",
                    url:"./index.php/persona/borrar",
                    data: {
                        "id" : document.getElementById("idOtro").value
                    }
                })
                .done(function(respuesta){
                    alert("Elimino correctamente");
                    console.log(respuesta);
                })
                .fail(function(error){
                    alert("Hay un error");
                });	
    }