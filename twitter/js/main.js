function todoList(){
	// crear la lista con checkbox
	var item = document.getElementById("areaTexto").value;
	var text = document.createTextNode(item);
	var newItem = document.createElement("li");
	var checkbox = document.createElement("input");
 	checkbox.type ="checkbox";
 	checkbox.value = 1;
 	
	document.getElementById("todoList").appendChild(newItem);
	// button
	var icono = document.createElement("i");
		icono.setAttribute("class","fa fa-trash");
	newItem.appendChild(checkbox);
 	newItem.appendChild(text);
 	newItem.appendChild(icono);
}