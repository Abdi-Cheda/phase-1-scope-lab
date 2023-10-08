// Declare customerName in global scope and set it to 'bob'
var customerName = 'bob';

// 1) Returns the customerName
function returnCustomerName() {
    return customerName;
}

// 2) Modifies the customerName variable to uppercase
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3) Sets the best customer
function setBestCustomer() {
    bestCustomer = 'not bob'; // Set bestCustomer to 'not bob'
}

// 4) Overwrites the best customer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Set bestCustomer to 'maybe bob'
}

// Define the missing function
function changeLeastFavoriteCustomer() {
    // Your implementation logic goes here
}

// 5) Unsuccessfully tries to reassign the least favorite customer
it('unsuccessfully tries to reassign the least favorite customer', function() {
    // Wrap the function call inside a function to catch the error
    function attemptReassignment() {
        changeLeastFavoriteCustomer();
    }

    // Expect attemptReassignment to throw an error
    expect(attemptReassignment).to.throw(Error);
});


