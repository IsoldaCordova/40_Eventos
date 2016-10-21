function todoList(){

	var item = document.getElementById("todoInput").value;
	var text = document.createTextNode(item);
	var newItem = document.createElement("li");
	var checkbox = document.createElement("input");
 	checkbox.type ="checkbox";
 	checkbox.value = 1;
 	newItem.appendChild(checkbox);

 	newItem.appendChild(text);
	document.getElementById("todoList").appendChild(newItem);

}