# Intro to REST Notes

REST is a standardization patter for defining routes, linking HTTP and CRUD together.

> CRUD stands for Create, Read, Update, Destroy. It refers to manipulating databases.

REST has seven total defined routes.

## Restful Routs

| Name | Path | HTTP Verb | Purpose | 
| --- | --- | --- | --- |
| Index | /index | GET | Displays the page|
| New | /index/new | GET | Shows a new forum for index|
| Create | /index |-POST |-Creates new object for index and redirects (usually back to index)|
| Show | /index/:id | GET | Shows info about a selected object on the index page|
| Edit | /index/:id/edit | GET | Show the edit form for the selected object |
| Update | /index/:id | PUT | Update the edited form object and redirects (usually back to index) |
| Destroy | /index/:id | DELETE | Deletes the selected index object and redirects (usually back to index) | 