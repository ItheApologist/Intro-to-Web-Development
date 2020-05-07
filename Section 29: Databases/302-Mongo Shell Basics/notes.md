# Mongo Shell Basics

`show dbs` - Displays a list of all dbs.

`use` - Connects to an existing database OR creates that database if it doesn't exist.

> The db works with collections instead of tables. That collection contains all the db objects.

`insert` - Adds data to a collection.

> Example: `db.dogs.insert({name: "Rusty", breed: "Mutt"})`
>
> `db` - refers to the actively selected db.
> `dogs` - refers to the collection. If it doesn't exist, it will create that collection.
> `insert()` - This is calling the insert command to add data to the selected db and collection.
> `{}` - Works just like any object in Javascript.

> Each object is given a unique ObjectId by Mongo.

`show collections` - Will display all collections in a db.

`find` - Will find objects specified in a collection.

> Example: `db.dogs.find()` will find all objects within the dogs collection of the selected db. 
> Example: `db.dog.find({name: "Rusty"})` will find the object(s) that have a name of Rusty in the dogs collection of the active db.

`update` - Modifies the data of an object. It takes in two items: the object to be modified and the modification of that selected data. 

> Example: `db.dogs.update({name: "Lulu"}, {breed: "Labradoodle"})` will update the object(s) with the name of Lulu and replace all data with breed of labradoodle.
> Example: `db.dogs.update({name: "Rusty"}, {$set: {name: "Tater", isCute: true}})` will update the object named Rusty in the dogs collection to change it's name to Tater and add the isCute attribute with a value to true. isCute is added because it doesn't exist. To update and add just the selected values, we put in `$set:` to specify that.

`remove` - Removes an object from the specified collection. 

> Example: `db.dogs.remove({breed: "Labradoodle"})` will remove all objects in the dogs collection of the active database with a breed of Labradoodle.
> Example: `db.dog.remove({breed: "Mutt"}).limit(1) will only remove one object with the breed of mutt from the dogs collection of the active db. This is because of the limit method with a value of 1 inserted. 