// Use getAttribute() to select attributes and setAttributes() to change an attribute.

var link = document.querySelector("a");
link.getAttribute("href"); //"www.google.com"
link.setAttribute("href", "www.dogs.com");
// changes to:
// <a href="www.dogs.com">I am a link</a>

//To change the image src
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png")
// changes to:
// <img src="corgi.png">