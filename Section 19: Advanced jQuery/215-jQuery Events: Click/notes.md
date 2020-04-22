# jQuery Events: Click Notes

> Bind an event handler to the "click" JavaScript event, or trigger that event on an element.

[Documentation](https://api.jquery.com/click/)

It's a quick and easy way to add a lick listener to element(s)

## Examples

``` $("#submit").click(function() {
    console.log("Another Click");
}); ```

This adds a click function to any item with the ID of submit. This click logs the string "Another Click" to the console.

``` $("button").click(function() {
    alert("Someone clicked a button");
}); ```

This adds a click function to every button element in the HTML. This click function causes an alert message with the string "Someone clicked a button" to appear.

If we wanted to change the background color, we could write this:

``` $("button").click(function() {
    $(this).css("background", "pink");
}); ```