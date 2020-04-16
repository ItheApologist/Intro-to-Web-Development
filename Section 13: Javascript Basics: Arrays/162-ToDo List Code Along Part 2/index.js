var todos = ["test"];

var input = prompt("What would you like to do?")

function listItems() {
    console.log("**********")
    todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("**********")
}

function newItem() {
    var newToDo = prompt("Enter new todo");
    todos.push(newToDo);
    console.log("Added " + newToDo)
}

function deleteItem() {
    var index = prompt("Enter index of todo to delete");
    var deleted = todos[index];
    todos.splice(index,1);
    console.log("Deleted " + deleted);
}

while(input !== "quit") {
    if(input === "list") {
        listItems();
    } else if(input === "new") {
        newItem()
    } else if(input === "delete") {
        deleteItem()
    } else {
        alert("That is not a valid option. Please type list, new, delete, or quit")
    }
    input = prompt("What would you like to do?")
}

console.log("The app has exited");