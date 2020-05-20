# Creating Comments Notes

> Nested routes are taking new routes dependent on old routes and making them work with one another.

For example, if we have a set of routes for campgrounds and we want to add routes for creating new comments for those campgrounds, what we would do is: `campgrounds/:id/comments` or `campgrounds/:id/comments/new`. The new comments routes are nested into the campgrounds routes because they are dependent on the specific campground that we are referencing. 