// Welcome message
var user = 'Mike';
var salutation = 'Greetings, ';
var greeting = salutation + user + "! Here are some recent reviews on the Akai MPK mini. ";
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// Product price
var price = 100,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

    priceEl.textContent = price.toFixed(2); 
    studentPriceEl.textContent = studentPrice.toFixed(2);