API vs SSR

API just sends the data (generally in the json format). html is responsibility of frontend then.

SSR sends the entire template(html along with data embedded). html taken care by backend itself

-----------
Express middleware are just functions executed before request to the server

req => middleware => res

add middleware function name in route handler; req, res and next are automatically passed to middleware function

Always have next() in middleware so that the next function handles the request