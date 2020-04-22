# jQuery Events: On

[jQuery Methods Documentation](https://api.jquery.com/)

[on() Documentation](https://api.jquery.com/on/)

> Attach an event handler function for one or more events to the selected elements.

on() works similarly to vanilla JavaScript addEventListener. It allows for you to specify the type of event to listen for.

> Using on is more productive then using the base method because it will add listeners for all potential future elements. 

## Examples

```$("h1").on("click", function() {
    $(this).css("color", "purple");
});```

Note that when using on(), you need to specify the method to use, in this case, click, then the function. 
The above looks for a click on the h1 and changes the color of the clicked h1 to purple. Note that this is achieved by using the jQuery "this" method instead of h1. Using h1 would change all h1's to be purple.

```$("input").on("keypress", function() {
    console.log("Key Pressed");
});```

The above listens for a keypress in the input element and logs "Key Pressed" when found.

```$("button").on("mouseenter", function() {
    $(this).css("font-weight", "bold")
});

$("button").on("mouseleave", function() {
    $(this).css("font-weight", "normal")
});```

The above code makes it so that when your mouse enters the button element, or better hovers over it, the font weight changes to bold. The send line makes it so that when your mouse leaves the button, or stops hovering over it, it changes back to normal. 