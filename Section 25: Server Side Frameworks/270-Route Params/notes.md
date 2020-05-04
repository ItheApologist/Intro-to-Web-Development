# Route Params Notes

Order of routes matter. If we put in a * route before all other routes, then that will always be served and never moved on to the other routes. This is because the routes are processed in order until one that matches is processed. If you put a route before another that triggers before your intended route, then you need to re-order your routes.

Route Parameters are how we write wet code to allow routing to be dynamic. 

By using a ":", we tell node to ignore any specific characters and to just match anything after the "/".

Keep in mind that anything after the "/" for each colon object won't work unless a route has been specified.

You can also chain these to allow for multiple "/" routes. 

You can mix and match using the ":" variable making some route items specific and some non-specific within a single route.

In our code, you will see a lot of use with the res part of the function. This is the response to the request. The req, or request, contains all the information about the request and we can use that. 