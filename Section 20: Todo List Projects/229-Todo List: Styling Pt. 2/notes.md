# General Project Notes

Event bubbling is when you set event listeners for elements containing other elements. What happens is if you set an event listener for an li and also the ul that contains the li, then you click on the li, the event listener will fire for the li, then the ul, and going out from that order.

The `.remove()` method removes an element from a page.

The `.parent()` makes the element referenced go to the parent element if it has one. In our example, we call our span and set it to the parent, meaning our code effects the li.

The .stopPropagation() method will prevent event bubbling.

.val() captures the value of the specified element.

.append() adds a value to the end of a specified element.

In our code, we use .on() in order to ensure our new li's get the same click listeners our pre-made ones do. In order to do that, you need to write the listener for an element that is pre-existing. In this case, the ul element will work. We write:

`$("ul").on("click", "li", function())

So basically, parent element, on, method to call (click in this case), the element you want it to effect (li) and the callback function. 