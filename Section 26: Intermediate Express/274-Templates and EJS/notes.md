# Templates and EJS Notes

The `.render()` method allows us to return back an HTML page. However, this HTML page needs to be written in a .ejs file, standing for embedded javascript.

You can define variables in ejs with the `<%= {CODE} %>` line. You can then pass variables from your js file in the render method like so: `res.render("{NAME OF EJS FILE}", {{VAR IN EJS FILE}: {VAR IN JS FILE}});

"*" anything in all caps encapsulated in "{}" is to be replaced with item specified with "{}" removed. 