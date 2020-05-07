# Database Notes

A database is a collection of information and data with an interface for retrieving and modifying that data.

## SQL vs NoSQL

SQL is relational and NoSQL is non-relational

A rational database is static. Because of this, any new properties added to a table must be added for all entries. As well, if you want to associate data from one table to data from another table, you need to create a join table which links the two data tables together.

A non-relational database doesn't use tables. Rather, objects are crated in the database which contain all the data, much like an array in JavaScript. This allows the database to be more flexable. For example, you can have one object have an attribute called favFood and another with favDrink and they both won't require each others attributes.