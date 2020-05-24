# Keyword this Notes

"this" is a reserved keyword in JS. "this"'s value is determined by how a function is called (known as its execution context).

There are four rules that determine its value:

* Global
* Object/Implicit
* Explicit
* New

The global context is any declaration of "this" that exist outside any JS object. It is attached to the global object, which is the root object in JS. In a browser, that is "window".

The keyword this is still within the global context when inside a function. Unless that function refers to a declared object (any object created by the user), it is still global.

The Implicit/Object context is when the keyword this is declared inside an object. Keyword this will be the value of the closest parent object within its context. This is important to remember when we have nested objects.

The Explicit context allows us to use three methods, call, apply, or bind, to set the this value to whatever we want. Note that this only works within the context of a function. 

| Name of Method    | Parameters                 | Invoke Immediately    |
| ---               | ---                        | ---                   |
| Call              | thisArg, a, b, c, d, ...   | Yes                   | 
| Apply             | thisArg, [a, b, c, d, ...] | Yes                   |
| Bind              | thisArg, a, b, c, d, ...   | No                    |

To simplify, Call takes in multiple arguments at one while apply take in two: one being an array of arguments. 

Bind works like Call, but unlike Call and Apply, is not invoked immediately. This is useful when we are not sure of all the arguments that will need to be passed into the function. 