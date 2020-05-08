# Intro to REST Notes

REST is a standardization patter for defining routes, linking HTTP and CRUD together.

> CRUD stands for Create, Read, Update, Destroy. It refers to manipulating databases.

REST has seven total defined routes.

## Restful Routs

| Name | Path | HTTP Verb | Purpose | Mongoose Method |
| --- | --- | --- | --- | --- | 
| Index | /index | GET | Displays the page| Index.find() |
| New | /index/new | GET | Shows a new forum for index| N/A |
| Create | /index |-POST |-Creates new object for index and redirects (usually back to index)| Index.create |
| Show | /index/:id | GET | Shows info about a selected object on the index page | Index.findById() |
| Edit | /index/:id/edit | GET | Show the edit form for the selected object | Index.findById() |
| Update | /index/:id | PUT | Update the edited form object and redirects (usually back to index) | Index.findByAndUpdate() |
| Destroy | /index/:id | DELETE | Deletes the selected index object and redirects (usually back to index) | Index.findByAndRemove() | 