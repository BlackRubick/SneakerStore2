var conexion = require("./conectar");

function cargarDatos(){
	var nombre = document.getElementById("Username").value;
	var contra = document.getElementById("password").value;
	
	$query = `INSERT INTO Usuario VALUES (0,'${nombre}','${contra}')`;
	conexion.query($query, function (err,rows){
		if(err){
			console.log("error en el query");
			console.log(err);
			return;
		}
		console.log("Bien");
	});
	var tablaR = document.getElementById("tabla");
	var Buscar = document.getElementById("buscador").value;
	$query = `select Nombre from Usuario where Nombre = '${Buscar}' ;`;
	conexion.query($query,function(err,rows,fields){
		if(err){
			console.log("error en el query");
			console.log(err);
			return;
		}
		console.log("Bien");
		const long = rows.length;
		for(i=0;i<long;i++){
			var newRow = tablaR.insertRow(-1);
			var celdaId = newRow.insertCell(0);
			var celdaUsuario = newRow.insertCell(1);
			var textoId = document.createTextNode(rows[i].id_Usuario);
			var textoUsuario = document.createTextNode(rows[i].Nombre);
			celdaId.appendChild(textoId);
			celdaUsuario.appendChild(textoUsuario);
			
		}
	}); 

}
	function Mostrar(){
		
		$query = `select * from usuario ;`;
		
		conexion.query($query, function(err, rows, fields){
			if(err){
				console.log("Error en el query");
				console.log(err);
				return;
			}else{
				tamano = rows.length;
				var tablaR = document.getElementById("tabla");
				if(tamano == 0){
					alert("Este Usuario no existe en la tabla :( ");
				}else{
					alert("Usuario encotrado wuju :)")
					for(i=0; i<tamano; i++){
						
						var cadena = rows[i].id_Usuario+ " "+ rows[i].Nombre + " " ;
						alert(cadena);
						var newRow = tablaR.insertRow(-1);
						var celdaID = newRow.insertCell(0);
						var celdaUsuario = newRow.insertCell(1);
			
						var textoId = document.createTextNode(rows[i].id_Usuario);
						var textoUsuario = document.createTextNode(rows[i].Nombre);
			
						celdaID.appendChild(textoId);
						celdaUsuario.appendChild(textoUsuario);
						
					}
				}
			}
		});
	}


function buscar(){
    var nombre = document.getElementById("buscador").value;
    $query = `select * from usuario where nombre = '${nombre}';`;
    
    conexion.query($query, function(err, rows, fields){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }else{
            tamano = rows.length;
            if(tamano == 0){
                alert("Este Usuario no existe en la tabla :( ");
            }else{
				alert("Usuario encotrado wuju :)")
                for(i=0; i<tamano; i++){
                    var tablaR = document.getElementById("tabla");
        
                    var newRow = tablaR.insertRow(-1);
                    var celdaID = newRow.insertCell(0);
                    var celdaUsuario = newRow.insertCell(1);
        
                    var textoId = document.createTextNode(rows[i].id_Usuario);
                    var textoUsuario = document.createTextNode(rows[i].Nombre);
        
                    celdaID.appendChild(textoId);
                    celdaUsuario.appendChild(textoUsuario);
					
					
                }
            }
        }
    });
}


