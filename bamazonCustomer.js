// Author: Melinda Hasselbring
// File: bamazonCustomer.js
// Date 07-08-17


var mysql = require('mysql');//Driver for MySQL
var inquirer = require('inquirer');//Needed for prompts
require('console.table');//Needed for logging tables


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});



// connect to mySQL database
connection.connect(function(err) {
    if (err) throw err;
    // get all products
    queryId_name_price().then(function(result) {
        // then list them
        console.log("Please select a product.")
        result.forEach(function(item) {
            console.log('Item ID: ' + item.id + ' | Product Name: ' + item.product_name + ' | Price: ' + item.price);
        });
    // then ask what the user would like to do
    }).then(function() {
        return whatWouldYouLike();
    });
})
function queryId_name_price(){
    return new Promise(function(resolve, reject) {
        // query for all items in products table
        connection.query("SELECT * FROM products", function(err, res) {
            if (err) reject(err);
            resolve(res);
        });
    });
}

//   6. The app should then prompt users with two messages.
//    * The first should ask them the ID of the product they would like to buy.

function whatWouldYouLike() {
    return inquirer.prompt([{
        name: 'product_id',
        message: 'What is the ID of the product you would like to buy?',
        type: 'input',
        validate: function(value) {
            if (isNaN(value) === false) {
                return true;
            } else {
                console.log('\nPlease enter a valid ID.');
                return false;
            }
        }
    }, 

//    * The second message should ask how many units of the product they would like to buy.
        {
        name: 'number_of_units',
        message: 'How many units would you like to buy?',
        type: 'input',
        validate: function(value) {
            if (isNaN(value) === false) {
                return true;
            } else {
                console.log('\nPlease enter a valid quantity.');
                return false;
            }
        }
    }]).then(function(answer) {
        return new Promise(function(resolve, reject) {
            // query for all items in products table where the item_id is what was chosen
            connection.query("SELECT * FROM products WHERE id=?", answer.product_id, function(err, res) {
                if (err) reject(err);
                resolve(res);
            });
        }).then(function(result) {

//   7. Once the customer has placed the order, it should check if  the store has enough of the product to meet the customer's request.
//    * If not, the app logs a phrase  `Insufficient quantity!`, and then prevent the order from going through.
            // if there aren't enough of the item
            if (answer.number_of_units > result[0].stock_quantity) {
                return "Insufficient quantity!";
            // if there are enough
            } else {
                var object = {};
                // answer is the users responses to the prompts
                object.answer = answer;
                // result is the results of the query
                object.result = result;
                return object;
            }
        }).catch(function(err) {
            console.log(err);
            connection.destroy();
        }).then(function(object) {

   //8. However, if your store _does_ have enough of the product, the order goues through.
   // * This means updating the SQL database to reflect the remaining quantity.
   // * Once the update goes through, show the customer the total cost of their purchase.
   //          // if there was sufficient quantity
            if (object.answer) {
                var newQuantity = object.result[0].stock_quantity - object.answer.number_of_units;
                var product = object.answer.product_id;
                var totalCost = (object.result[0].price * object.answer.number_of_units).toFixed(2);
                // query that updates the quantity of the item
                connection.query("UPDATE products SET stock_quantity=? WHERE id=?", [newQuantity, product], function(err, res) {
                    if (err) reject(err);
                    console.log('Your total cost is $' + totalCost);
                    // destroy connection
                    connection.destroy();
                });
            } else {
                console.log(object);
                // destroy connection
                connection.destroy();
            }
        });
    });
}



