# Intro-to-Web-Development
A repository for the course material created during my web development course.

Course link: https://www.udemy.com/course/the-web-developer-bootcamp/

PLEASE NOTE:

This codebase is very bloated. Each directory in each section is the contents of that associated lesson video on the Udemy class. Some projects span over many lessons and therefore the same code is copied each time. It is meant as a portfolio reflection rather than a useable project.

## Restful Routs

For reference, below are the RESTful routes.

| Name | Path | HTTP Verb | Purpose | Mongoose Method |
| --- | --- | --- | --- | --- | 
| Index | /index | GET | Displays the page| Index.find() |
| New | /index/new | GET | Shows a new forum for index| N/A |
| Create | /index |-POST |-Creates new object for index and redirects (usually back to index)| Index.create |
| Show | /index/:id | GET | Shows info about a selected object on the index page | Index.findById() |
| Edit | /index/:id/edit | GET | Show the edit form for the selected object | Index.findById() |
| Update | /index/:id | PUT | Update the edited form object and redirects (usually back to index) | Index.findByAndUpdate() |
| Destroy | /index/:id | DELETE | Deletes the selected index object and redirects (usually back to index) | Index.findByAndRemove() | 