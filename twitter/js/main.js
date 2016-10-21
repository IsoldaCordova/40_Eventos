function todoList(){
	// crear la lista con checkbox
	var item = document.getElementById("areaTexto").value;
	var text = document.createTextNode(item);
	var newItem = document.createElement("li");
	var checkbox = document.createElement("input");
 	checkbox.type ="checkbox";
 	checkbox.value = 1;
	document.getElementById("todoList").appendChild(newItem);
	// AGREGAR EL ICON
	var icono = document.createElement("i");
		icono.setAttribute("class","fa fa-trash");
	newItem.appendChild(checkbox);
 	newItem.appendChild(text);
 	newItem.appendChild(icono);
 	icono.onclick = function(){
 		item.parentElement.removeChild(item);
 	}
 	checkbox.onclick = function(){
 		if(checkbox.checked == true){
 			text.parentElement.classList.add("tachado");
 		}else{
 			text.parentElement.classList.remove("tachado");
 		}
 	}
}