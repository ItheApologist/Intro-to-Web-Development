# Route Params Notes

Order of routes matter. If we put in a * route before all other routes, then that will always be served and never moved on to the other routes. This is because the routes are processed in order until one that matches is processed. If you put a route before another that triggers before your intended route, then you need to re-order your routes. 