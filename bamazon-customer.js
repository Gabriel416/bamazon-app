//Dependencies
var inquirer = require('inquirer');
var mysql = require('mysql');
//Variables used for later on
var stock;
var cost;

//Connecting to Mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: " ",
    database: "Bamazon"
});

//Display all columns if know error
connection.connect(function(err) {
    if (err) throw err;
    console.log("  ID | Product_Name| Department_name| Price| Stock_quantity" + "\n");
});

//Select everything from table and display to user
connection.query('SELECT * From products', function(error, results, fields) {
    if (error) throw error;
    for (var i = 0; i < results.length; i++) {
        console.log("   " + results[i].ID + " |" +
            "   " + results[i].product_name + " |" +
            "   " + results[i].department_name + " |" +
            "   " + results[i].price + " |" +
            "   " + results[i].stock_quantity + "")
    }
    questions();
});
//Ask what item user wants
function questions() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Enter the ID of the product you would like to buy."
    }]).then(function(user) {
        //Get the item according to user's id choice
         connection.query("select * from products where ID = '" + user.name + "'",
            function(error, results, fields) {
                if (error) throw error;
                //store item details in variables previously mentioned
                stock = results[0].stock_quantity;
                cost = results[0].price;
                checkout();
            });
    });
};

//Ask how many of the same item the user cares for
function checkout() {
    inquirer.prompt([{
        type: "input",
        name: "name2",
        message: "How many units of the product would you like to buy?"
    }]).then(function(answer) {
        //store user choice value
        var finalPurchase = answer.name2;
        //subtract the default stock_quantity number from user choice
        var closingStatement = stock - finalPurchase;
        //times by default price value to get sub total
        var subTotal = (finalPurchase * cost);
        //If they go over stock inventory console log following message
        if (finalPurchase > stock) {
            console.log("Looks like we ran out of stock :(");
        } else {
            console.log(" \n Your total comes out to be " + '$' + subTotal + '.00');
            //Tried updating stock in database but got error saying user.name is undefined.
            connection.query("UPDATE products SET = ? WHERE = ?", [{
                stock_quantity: closingStatement,
                ID: user.name
            }]);
        }
    })
}
