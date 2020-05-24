# Keyword this Notes

"this" is a reserved keyword in JS. "this"'s value is determined by how a function is called (known as its execution context).

There are four rules that determine its value:

* Global
* Object/Implicit
* Explicit
* New

The global context is any declaration of "this" that exist outside any JS object. It is attached to the global object, which is the root object in JS. In a browser, that is "window". 