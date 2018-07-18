'use strict';

var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 am', '8:00 am',];

function Store(name, minCustomers, maxCustomers, avgCookiesPerCustomer, cookiesPerHour, totals) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHour = cookiesPerHour;
  this.totals = totals;
}

var pike = new Store('First and Pike', 23, 65, 6.3, [], 0);
var seaTac = new Store('SeaTac Airport', 23, 65, 6.3, [], 0);
var seaCenter = new Store('Seattle Center', 23, 65, 6.3, [], 0);
var capHill = new Store('Capitol Hill', 23, 65, 6.3, [], 0);
var alki = new Store('Alki', 23, 65, 6.3, [], 0);

var locations = [pike, seaTac, seaCenter, capHill, alki];

Store.prototype.calcCustomersPerHour = function () {
  return Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers)) + this.minCustomers) * this.avgCookiesPerCustomer;
};
Store.prototype.calcCookiesPerHour = function () {
  this.cookiesPerHour.push(Math.round(this.calcCustomersPerHour(this.minCustomers, this.maxCustomers)));
};
Store.prototype.total = function () {
  return Math.round(this.totals += this.calcCustomersPerHour(this.maxCustomers, this.minCustomers));
};

for (var i = 0; i < storeHours.length; i++) {
  pike.calcCustomersPerHour();
  pike.calcCookiesPerHour();
  pike.total();
  seaTac.calcCustomersPerHour();
  seaTac.calcCookiesPerHour();
  seaTac.total();
  seaCenter.calcCustomersPerHour();
  seaCenter.calcCookiesPerHour();
  seaCenter.total();
  capHill.calcCustomersPerHour();
  capHill.calcCookiesPerHour();
  capHill.total();
  alki.calcCustomersPerHour();
  alki.calcCookiesPerHour();
  alki.total();
}
console.log('First and Pike cookies per hour array', pike.cookiesPerHour);
console.log('SeaTac Airport cookies per hour array', seaTac.cookiesPerHour);
console.log('Seattle Center cookies per hour array', seaCenter.cookiesPerHour);
console.log('Capitol Hill cookies per hour array', capHill.cookiesPerHour);
console.log('Alki cookies per hour array', alki.cookiesPerHour);
console.log('First and Pike totals', pike.totals);
console.log('SeaTac Airport totals', seaTac.totals);
console.log('Seattle Center totals', seaCenter.totals);
console.log('Capitol Hill totals', capHill.totals);
console.log('Alki totals', alki.totals);

//var trHours = document.createElement('tr').id = 'hoursRow';
//document.getElementById('info').appendChild(trHours);

var trEl = document.createElement('tr');
var tdEl = document.createElement('td');
tdEl.textContent = ' ';
trEl.appendChild(tdEl);
for (var n = 0; n < storeHours.length; n++) {
  tdEl = document.createElement('td');
  tdEl.textContent = storeHours[n];
  trEl.appendChild(tdEl);
}
var semiEl = document.getElementById('info');
semiEl.appendChild(trEl);

for (var j = 0; j < 5; j++) {
  var trEl2 = document.createElement('tr');
  var tdEl2 = document.createElement('td');
  trEl2.textContent = locations[j].name;
  for (var k = 0; k < storeHours.length; k++) {
    tdEl2 = document.createElement('td');
    tdEl2.textContent = locations[j].cookiesPerHour[k];
    trEl2.appendChild(tdEl2);
  }
  var tdEl3 = document.createElement('td');
  tdEl3.textContent = locations[j].totals;
  trEl2.appendChild(tdEl3);
  var semiEl2 = document.getElementById('info');
  semiEl2.appendChild(trEl2);
  var trEl4 = document.createElement('tr');
  var tdEl4 = document.createElement('td');
  tdEl4.textContent = 'Totals';
  trEl4.appendChild(tdEl4);
}


// for (var j = 0; j < storeHours.length; j++) {
//   var tdHours = document.createElement('td');
//   tdHours.textContent = storeHours[j];
//   document.getElementById('hoursRow').appendChild(tdHours);
//   var tdPikeCookies = document.createElement('td');
//   tdPikeCookies.textContent = pike.cookiesPerHour[j];
//   document.getElementById('pikeRow').appendChild(tdPikeCookies);
//   var tdSeaTacCookies = document.createElement('td');
//   tdSeaTacCookies.textContent = seaTac.cookiesPerHour[j];
//   document.getElementById('seaTacRow').appendChild(tdSeaTacCookies);
//   var tdSeaCenter = document.createElement('td');
//   tdSeaCenter.textContent = seaCenter.cookiesPerHour[j];
//   document.getElementById('seaCenterRow').appendChild(tdSeaCenter);
//   var tdCapHill = document.createElement('td');
//   tdCapHill.textContent = capHill.cookiesPerHour[j];
//   document.getElementById('capHillRow').appendChild(tdCapHill);
//   var tdAlki = document.createElement('td');
//   tdAlki.textContent = alki.cookiesPerHour[j];
//   document.getElementById('alkiRow').appendChild(tdAlki);
// }

// for (var t = 0; t < storeHours.length; t++) {
//   var rows
// }

// for (var j = 0; j < storeHours.length; j++) {
//   // Create an li for first and pike
//   var liFirstAndPike = document.createElement('li');
//   liFirstAndPike.textContent = storeHours[j] + ' ' + firstAndPike.cookiesPerHour[j] + ' Cookies';
//   document.getElementById('firstandpike').appendChild(liFirstAndPike);
//   // Create an li for SeaTac Airport
//   var liSeaTac = document.createElement('li');
//   liSeaTac.textContent = storeHours[j] + ' ' + seaTac.cookiesPerHour[j] + ' Cookies';
//   document.getElementById('seatac').appendChild(liSeaTac);
//   // Create an li for Seattle Center
//   var liSeaCenter = document.createElement('li');
//   liSeaCenter.textContent = storeHours[j] + ' ' + seaCenter.cookiesPerHour[j] + ' Cookies';
//   document.getElementById('seacenter').appendChild(liSeaCenter);
//   // Create an li for Capitol Hill
//   var liCapHill = document.createElement('li');
//   liCapHill.textContent = storeHours[j] + ' ' + capHill.cookiesPerHour[j] + ' Cookies';
//   document.getElementById('caphill').appendChild(liCapHill);
//   // Create an li for Alki
//   var liAlki = document.createElement('li');
//   liAlki.textContent = storeHours[j] + ' ' + alki.cookiesPerHour[j] + ' Cookies';
//   document.getElementById('alki').appendChild(liAlki);
// These add the number of cookies together to a total number, one line for each location, to be used outside of the loop
// firstAndPikeTotal = Math.round(firstAndPikeTotal += firstAndPike.customersPerHour(firstAndPike.maxCustomers, firstAndPike.minCustomers));
// seaTacTotal = Math.round(seaTacTotal += seaTac.customersPerHour(seaTac.maxCustomers, seaTac.minCustomers));
// seaCenterTotal = Math.round(seaCenterTotal += seaCenter.customersPerHour(seaCenter.maxCustomers, seaCenter.minCustomers));
// capHillTotal = Math.round(capHillTotal += capHill.customersPerHour(capHill.maxCustomers, capHill.minCustomers));
// alkiTotal = Math.round(alkiTotal += alki.customersPerHour(alki.maxCustomers, alki.minCustomers));
//}

// uses total cookies found in loop to create an li for the total cookies at first and pike
// var liFirstAndPikeTotal = document.createElement('li');
// liFirstAndPikeTotal.textContent = 'Total: ' + firstAndPikeTotal + ' Cookies';
// document.getElementById('firstandpike').appendChild(liFirstAndPikeTotal);
// // uses total cookies found in loop to create an li for the total cookies at seatac airport
// var liSeaTacTotal = document.createElement('li');
// liSeaTacTotal.textContent = 'Total: ' + seaTacTotal + ' Cookies';
// document.getElementById('seatac').appendChild(liSeaTacTotal);
// // uses total cookies found in loop to create an li for the total cookies at seattle center
// var liSeaCenterTotal = document.createElement('li');
// liSeaCenterTotal.textContent = 'Total: ' + seaCenterTotal + ' Cookies';
// document.getElementById('seacenter').appendChild(liSeaCenterTotal);
// // uses total cookies found in loop to create an li for the total cookies captiol hill
// var liCapHillTotal = document.createElement('li');
// liCapHillTotal.textContent = 'Total: ' + capHillTotal + ' Cookies';
// document.getElementById('caphill').appendChild(liCapHillTotal);
// // uses total cookies found in loop to create an li for the total cookies at alki
// var liAlkiTotal = document.createElement('li');
// liAlkiTotal.textContent = 'Total: ' + alkiTotal + ' Cookies';
// document.getElementById('alki').appendChild(liAlkiTotal);