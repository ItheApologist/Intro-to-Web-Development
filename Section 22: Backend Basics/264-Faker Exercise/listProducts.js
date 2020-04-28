var faker = require("faker");
    product = faker.commerce.productName();
    prices = faker.commerce.price();
    
for (var i = 0; i < 10; i++) {
    console.log(`${product} - $${prices}`);
    product = faker.commerce.productName();
    prices = faker.commerce.price();

}