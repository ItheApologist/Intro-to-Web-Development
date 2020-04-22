# Manipulating Classes with jQuery

[jQuery Methods Documentation](https://api.jquery.com/)

## .addClass()

> Adds the specified class(es) to each element in the set of matched elements

[Documentation](https://api.jquery.com/addClass/)

### Example

`$("h1").addClass("Correct")`

Adds the class "Correct" to the h1 tag.

## .removeClass()

> Remove a single class, multiple classes, or all classes from each element in the set of matched elements.

[Documentation](https://api.jquery.com/removeClass/)

### Example

`$("h1").removeClass("Correct")`

Removes the class "Correct" from the h1 tag.

## .toggleClass()

> Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.

[Documentation](https://api.jquery.com/toggleClass/)

### Example

`$("h1").toggleClass("Correct")`

If the h1 element contains the "Correct" class, it will remove it. If it doesn't contain the class, it will add it. 

> Like all of jQuery, it loops through all the tags selected unless specified.

