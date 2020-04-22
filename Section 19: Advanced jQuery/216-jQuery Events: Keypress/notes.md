# jQuery Events: Keypress Notes

[jQuery Methods Documentation](https://api.jquery.com/)

[Keypress Documentation](https://api.jquery.com/keypress/)

> Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.

> Note that keypress refers to when the actual character hits the screen and not when a key is pressed.

## Examples

```$("input").keypress(function() {
    console.log("A key was pressed");
});```

The above logs everytime a key is pressed when typing an input into the input box. 

```$("input").keypress(function(event) {
    if(event.which === 13) {
    console.log("The enter key was pressed");
    }
});```

By adding an a variable to capture the event being passed into the function, we are able to capture a number of values in that event array. With that, we get the "which" value which captures the key input in a numeric value. We know that the "enter" key is 13, so by running an if statement which checks for that, we can look for specific key entry to log. 