# RESTful Routing Notes

INDEX - GET route that displays a page.
> Example: `/dogs`
NEW - GET route that displays a form for submitting to the INDEX
> Example: `/dogs/new`
CREATE - POST route that adds a new item to the INDEX page.
> Example `/dogs`
SHOW - GET Shows info related to the item selected on the INDEX page.
> Example `/dogs/:id`

# Mongo Notes

`.drop()` drops a collection from the db.

> Example: `db.campgrounds.drop()` drops that whole collection. 