'use strict';

var storeHours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7am:', '8am:',];

var firstAndPike =  {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  customersPerHour: function() {
    return Math.floor(Math.random()* ((this.maxCustomers-this.minCustomers)) + this.minCustomers) * this.avgCookiesPerCustomer;
  },
  cookiesPerHour: [],
  total: 0,
};

var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  customersPerHour: function() {
    return Math.floor(Math.random()* ((this.maxCustomers-this.minCustomers)) + this.minCustomers) * this.avgCookiesPerCustomer;
  },
  cookiesPerHour: [],
  total: 0,
};

var seaCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  customersPerHour: function() {
    return Math.floor(Math.random()* ((this.maxCustomers-this.minCustomers)) + this.minCustomers) * this.avgCookiesPerCustomer;
  },
  cookiesPerHour: [],
  total: 0,
};

var capHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  customersPerHour: function() {
    return Math.floor(Math.random()* ((this.maxCustomers-this.minCustomers)) + this.minCustomers) * this.avgCookiesPerCustomer;
  },
  cookiesPerHour: [],
  total: 0,
};

var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  customersPerHour: function() {
    return (Math.floor(Math.random()* ((this.maxCustomers-this.minCustomers)) + this.minCustomers) * this.avgCookiesPerCustomer);
  },
  cookiesPerHour: [],
  total: 0,
};
// These variable make working with the total (pushing it into an array or something) easier down the line
var firstAndPikeTotal = firstAndPike.total;
var seaTacTotal = seaTac.total;
var seaCenterTotal = seaCenter.total;
var capHillTotal = capHill.total;
var alkiTotal = alki.total;
// this loop uses a locations customersPerHour funtion to generate a rounded, random number between the min and max customers
// that number is then pushed into the corrosponding locations cookiesPerHour array
for (var i = 0; i < 15; i++) {
  firstAndPike.cookiesPerHour.push(Math.round(firstAndPike.customersPerHour(firstAndPike.minCustomers, firstAndPike.maxCustomers)));
  seaTac.cookiesPerHour.push(Math.round(seaTac.customersPerHour(seaTac.minCustomers, seaTac.maxCustomers)));
  seaCenter.cookiesPerHour.push(Math.round(seaCenter.customersPerHour(seaCenter.minCustomers, seaCenter.maxCustomers)));
  capHill.cookiesPerHour.push(Math.round(capHill.customersPerHour(capHill.minCustomers, capHill.maxCustomers)));
  alki.cookiesPerHour.push(Math.round(alki.customersPerHour(alki.minCustomers, alki.maxCustomers)));
}
// test arrays
console.log(firstAndPike.cookiesPerHour);
console.log(seaTac.cookiesPerHour);
console.log(seaCenter.cookiesPerHour);
console.log(capHill.cookiesPerHour);
console.log(alki.cookiesPerHour);

for (var j = 0; j < storeHours.length; j++) {
  // Create an li for first and pike
  var liFirstAndPike = document.createElement('li');
  liFirstAndPike.textContent = storeHours[j] + ' ' + firstAndPike.cookiesPerHour[j] + ' Cookies';
  document.getElementById('firstandpike').appendChild(liFirstAndPike);
  // Create an li for SeaTac Airport
  var liSeaTac = document.createElement('li');
  liSeaTac.textContent = storeHours[j] + ' ' + seaTac.cookiesPerHour[j] + ' Cookies';
  document.getElementById('seatac').appendChild(liSeaTac);
  // Create an li for Seattle Center
  var liSeaCenter = document.createElement('li');
  liSeaCenter.textContent = storeHours[j] + ' ' + seaCenter.cookiesPerHour[j] + ' Cookies';
  document.getElementById('seacenter').appendChild(liSeaCenter);
  // Create an li for Capitol Hill
  var liCapHill = document.createElement('li');
  liCapHill.textContent = storeHours[j] + ' ' + capHill.cookiesPerHour[j] + ' Cookies';
  document.getElementById('caphill').appendChild(liCapHill);
  // Create an li for Alki
  var liAlki = document.createElement('li');
  liAlki.textContent = storeHours[j] + ' ' + alki.cookiesPerHour[j] + ' Cookies';
  document.getElementById('alki').appendChild(liAlki);
  // These add the number of cookies together to a total number, one line for each location, to be used outside of the loop
  firstAndPikeTotal = Math.round(firstAndPikeTotal += firstAndPike.customersPerHour(firstAndPike.maxCustomers, firstAndPike.minCustomers));
  seaTacTotal = Math.round(seaTacTotal += seaTac.customersPerHour(seaTac.maxCustomers, seaTac.minCustomers));
  seaCenterTotal = Math.round(seaCenterTotal += seaCenter.customersPerHour(seaCenter.maxCustomers, seaCenter.minCustomers));
  capHillTotal = Math.round(capHillTotal += capHill.customersPerHour(capHill.maxCustomers, capHill.minCustomers));
  alkiTotal = Math.round(alkiTotal += alki.customersPerHour(alki.maxCustomers, alki.minCustomers));
}

// uses total cookies found in loop to create an li for the total cookies at first and pike
var liFirstAndPikeTotal = document.createElement('li');
liFirstAndPikeTotal.textContent = 'Total: ' + firstAndPikeTotal + ' Cookies';
document.getElementById('firstandpike').appendChild(liFirstAndPikeTotal);
// uses total cookies found in loop to create an li for the total cookies at seatac airport
var liSeaTacTotal = document.createElement('li');
liSeaTacTotal.textContent = 'Total: ' + seaTacTotal + ' Cookies';
document.getElementById('seatac').appendChild(liSeaTacTotal);
// uses total cookies found in loop to create an li for the total cookies at seattle center
var liSeaCenterTotal = document.createElement('li');
liSeaCenterTotal.textContent = 'Total: ' + seaCenterTotal + ' Cookies';
document.getElementById('seacenter').appendChild(liSeaCenterTotal);
// uses total cookies found in loop to create an li for the total cookies captiol hill
var liCapHillTotal = document.createElement('li');
liCapHillTotal.textContent = 'Total: ' + capHillTotal + ' Cookies';
document.getElementById('caphill').appendChild(liCapHillTotal);
// uses total cookies found in loop to create an li for the total cookies at alki
var liAlkiTotal = document.createElement('li');
liAlkiTotal.textContent = 'Total: ' + alkiTotal + ' Cookies';
document.getElementById('alki').appendChild(liAlkiTotal);