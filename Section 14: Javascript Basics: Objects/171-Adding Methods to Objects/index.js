// Below I've added an example object

var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
}

// We can add functions to objects. This is called a method. Below, I've added  the function called add that adds the values of x and y together.

var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function(x,y) {
        return x + y
    }
}

// To call the function, you will need to type the object, followed by a period, followed by the function, and then insert the variables into the parentheses. For example, to add three and five, we would type:
// obj.add(3,5). This would return 8.

// A real-world example is console.log. console is the object, and .log is the method. 

// There are a few benefits to adding a method to an object

// First is that it helps keep your code organized so you can group things together logically.

// If we have two animal objects, dogs and cats, and we want to write a function to called speak that returns what noise those animals make, it's best to write a method for the object. 