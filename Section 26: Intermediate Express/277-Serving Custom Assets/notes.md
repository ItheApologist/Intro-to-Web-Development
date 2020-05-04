# Custom Assets Notes

to use custom styling sheets, you can use a style tag and add in our css. The better way to do it is to write a CSS file and use the link tag to reference it.

Best practice is to create a public folder in the root directory for your server to use for serving those asset files.

To serve files not in the views directory, you need to include `app.use(express.static("NAME OF DIRECTORY"));`.

To avoid having to write ejs file extensions in your code, you can include `app.set("view engine", "ejs");`.

Partials are file templates that we can write to include in other files. So instead of having to write HTML boilerplate in each ejs file, we can write a partial to include in those files. 