# General Project Notes

Event bubbling is when you set event listeners for elements containing other elements. What happens is if you set an event listener for an li and also the ul that contains the li, then you click on the li, the event listener will fire for the li, then the ul, and going out from that order.

The .remove() method removes an element from a page.

The .parent() makes the element referenced go to the parent element if it has one. In our example, we call our span and set it to the parent, meaning our code effects the li. 