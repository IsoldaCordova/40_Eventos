var listaUno = document.getElementById("boton");
listaUno.addEventListener("click", añadirLista);
var contenedor = document.getElementById("lista");



function añadirLista(){
	// crear listas
	var listaName = document.createElement("input");
		listaName.setAttribute("placeholder","añadir titulo");
	var boton = document.createElement("button");
		boton.setAttribute("type","button");
		boton.textContent = ("Guardar");
	contenedor.appendChild(listaName);
	contenedor.appendChild(boton);
 	// Dar click en boton guardar y se borra el boton
 	boton.addEventListener("click",crearTitulo);
 	boton.onclick = function(){
 		boton.parentElement.removeChild(listaName);
 		boton.parentElement.removeChild(boton);
 		}

 	function crearTitulo(){
 		var tituloName = document.getElementById("tema");
 		var titulo =  document.createElement("h2");
 			titulo.innerHTML = listaName.value;
 		var texto = document.createElement("textarea");
 			texto.setAttribute("placeholder","añadir lista");
			texto.innerHTML = listaName.value;
 		var botonDos = document.createElement("button");
 			botonDos.setAttribute("type","button");
 			botonDos.style.display="block";
			botonDos.textContent = ("Guardar");
		tituloName.appendChild(titulo);
		tituloName.appendChild(texto);
		tituloName.appendChild(botonDos);

		

		botonDos.EventListener("click",crearListas);

		function crearListas(){
			var tema = document.createElement("h3");
				tema.innerHTML = listaName.value;

			texto.appendChild(tema);
		}
 	}
 }