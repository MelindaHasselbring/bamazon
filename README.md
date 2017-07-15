# Bamazon
Unit 12 Assignment: Node.js & MySQL


## Overview for Bamazon Customer.

*Bamazon project* is an Amazon-like storefront aplication. 


When a Node application called `bamazonCustomer.js` is run, it will first display all of the items available for sale. The display includes ids, names, and prices of products.  


It will then continue to display a question that would ask the user "What is the ID of the product you would like to buy?"  After the user enters the item_id and clicked 'enter', it will then continue to ask the user "How many units would you like to buy?" Once the order placed the, the app will check if there is enough inventory to fulfill the request.


* If there is enought inventory, the app will display the total cost, and deduct the number of unit/s from inventory to reflect the current inventory on hand.

![Order successful](./images/orderSuccess.png)


* Below is the inventory record before and after the order for item 9.

![Inventory for item 9 was depleted by 2.](./images/inventory.png)

* if not, the app will log a phrase  `Insufficient quantity!`, and then prevent the order from going through.     

![Order failed - Insufficient Inventory](./images/orderFailed.png)










**Follow these to get started.**

## Installation Instructions:

### Must create a database by running the bamazon.sql

### Run the following command to initialize npm and install all dependencies
    npm init
    npm install

### Install production dependencies using this command
    npm install mysql --save
    npm install inquirer --save
    npm install console.table --save


### Execute the following command to run the project:
    node bamazonCustomer.js



