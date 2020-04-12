# The Process

We select an element and then add an event listener

"Listen for a click on this `<button>`"

"Listen for a hover event on the `<h1>`"

"Listen for a keypress event on text input"


# The Syntax

To add a listener, we use a method called addEventListener

`element.addEventListener(type, functionToCall);`

```var button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log("SOMEONE CLICKED THE BUTTON!");
});```


#An Example

Let's display a message when a button is clicked

View the index.html & index.js files for example.
