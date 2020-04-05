var todos = ["test"];

var input = prompt("What would you like to do?")

while(input !== "quit") {
    if(input === "list") {
        console.log(todos);
    } else if(input === "new") {
        var newToDo = prompt("Enter new todo");
        todos.push(newToDo);
    }
    input = prompt("What would you like to do?")
}

console.log("The app has exited");