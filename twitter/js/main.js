function todoList(){
	// crear la lista con checkbox
	var item = document.getElementById("areaTexto").value;
	var text = document.createTextNode(item);
	var newItem = document.createElement("li");
	var checkbox = document.createElement("input");
 	checkbox.type ="checkbox";
 	checkbox.value = 1;
 	newItem.appendChild(checkbox);
 	newItem.appendChild(text);
	document.getElementById("todoList").appendChild(newItem);
	// button
	
}