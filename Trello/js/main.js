var listaUno = document.getElementById("boton");
listaUno.addEventListener("click", añadirLista);
var contenedor = document.getElementById("lista");

function añadirLista(){
	// primerGuardar
	var listaName = document.createElement("input");
		listaName.setAttribute("placeholder","añadir lista");

	var boton = document.createElement("button");
		boton.setAttribute("type","button");
		boton.textContent = ("Guardar");
	contenedor.appendChild(listaName);
	contenedor.appendChild(boton);
 	
 	boton.onclick = function(){
 		var item = document.createElement("textarea").value;
 		boton.parentElement.removeChild(boton);
 		var text = document.createTextNode(item);
 		var newItem = document.createElement("ul");
 	}

 }