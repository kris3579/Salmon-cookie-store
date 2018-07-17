'use strict';

var storeHours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7am:', '8am:',];

var firstAndPike =  {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  random: function() {
    return Math.floor(Math.random()* ((this.maxCustomers-this.minCustomers)) + this.minCustomers) * this.avgCookiesPerCustomer;
  },
  cookiesPerHour: [],
  total: 0,
};

var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  random: function() {
    return Math.floor(Math.random()* ((this.maxCustomers-this.minCustomers)) + this.minCustomers) * this.avgCookiesPerCustomer;
  },
  cookiesPerHour: [],
  total: 0,
};

var seaCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  random: function() {
    return Math.floor(Math.random()* ((this.maxCustomers-this.minCustomers)) + this.minCustomers) * this.avgCookiesPerCustomer;
  },
  cookiesPerHour: [],
  total: 0,
};

var capHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  random: function() {
    return Math.floor(Math.random()* ((this.maxCustomers-this.minCustomers)) + this.minCustomers) * this.avgCookiesPerCustomer;
  },
  cookiesPerHour: [],
  total: 0,
};

var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  random: function() {
    return (Math.floor(Math.random()* ((this.maxCustomers-this.minCustomers)) + this.minCustomers) * this.avgCookiesPerCustomer);
  },
  cookiesPerHour: [],
  total: 0,
};

var firstAndPikeTotal = firstAndPike.total;
var seaTacTotal = seaTac.total;
var seaCenterTotal = seaCenter.total;
var capHillTotal = capHill.total;
var alkiTotal = alki.total;

for (var i = 0; i < 15; i++) {
  firstAndPike.cookiesPerHour.push(Math.round(firstAndPike.random(firstAndPike.minCustomers, firstAndPike.maxCustomers)));
  seaTac.cookiesPerHour.push(Math.round(seaTac.random(seaTac.minCustomers, seaTac.maxCustomers)));
  seaCenter.cookiesPerHour.push(Math.round(seaCenter.random(seaCenter.minCustomers, seaCenter.maxCustomers)));
  capHill.cookiesPerHour.push(Math.round(capHill.random(capHill.minCustomers, capHill.maxCustomers)));
  alki.cookiesPerHour.push(Math.round(alki.random(alki.minCustomers, alki.maxCustomers)));
}
console.log(firstAndPike.cookiesPerHour);
console.log(seaTac.cookiesPerHour);
console.log(seaCenter.cookiesPerHour);
console.log(capHill.cookiesPerHour);
console.log(alki.cookiesPerHour);

for (var j = 0; j < storeHours.length; j++) {
  var liFirstAndPike = document.createElement('li');
  liFirstAndPike.textContent = storeHours[j] + ' ' + firstAndPike.cookiesPerHour[j] + ' cookies';
  document.getElementById('firstandpike').appendChild(liFirstAndPike);
  var liSeaTac = document.createElement('li');
  liSeaTac.textContent = storeHours[j] + ' ' + seaTac.cookiesPerHour[j] + ' cookies';
  document.getElementById('seatac').appendChild(liSeaTac);
  var liSeaCenter = document.createElement('li');
  liSeaCenter.textContent = storeHours[j] + ' ' + seaCenter.cookiesPerHour[j] + ' cookies';
  document.getElementById('seacenter').appendChild(liSeaCenter);
  var liCapHill = document.createElement('li');
  liCapHill.textContent = storeHours[j] + ' ' + capHill.cookiesPerHour[j] + ' cookies';
  document.getElementById('caphill').appendChild(liCapHill);
  var liAlki = document.createElement('li');
  liAlki.textContent = storeHours[j] + ' ' + alki.cookiesPerHour[j] + ' cookies';
  document.getElementById('alki').appendChild(liAlki);
  firstAndPikeTotal = Math.round(firstAndPikeTotal += firstAndPike.random(firstAndPike.maxCustomers, firstAndPike.minCustomers));
  seaTacTotal = Math.round(seaTacTotal += seaTac.random(seaTac.maxCustomers, seaTac.minCustomers));
  seaCenterTotal = Math.round(seaCenterTotal += seaCenter.random(seaCenter.maxCustomers, seaCenter.minCustomers));
  capHillTotal = Math.round(capHillTotal += capHill.random(capHill.maxCustomers, capHill.minCustomers));
  alkiTotal = Math.round(alkiTotal += alki.random(alki.maxCustomers, alki.minCustomers));
}

var liFirstAndPikeTotal = document.createElement('li');
liFirstAndPikeTotal.textContent = 'Total: ' + firstAndPikeTotal + ' cookies';
document.getElementById('firstandpike').appendChild(liFirstAndPikeTotal);
var liSeaTacTotal = document.createElement('li');
liSeaTacTotal.textContent = 'Total: ' + seaTacTotal + ' cookies';
document.getElementById('seatac').appendChild(liSeaTacTotal);
var liSeaCenterTotal = document.createElement('li');
liSeaCenterTotal.textContent = 'Total: ' + seaCenterTotal + ' cookies';
document.getElementById('seacenter').appendChild(liSeaCenterTotal);
var liCapHillTotal = document.createElement('li');
liCapHillTotal.textContent = 'Total: ' + capHillTotal + ' cookies';
document.getElementById('caphill').appendChild(liCapHillTotal);
var liAlkiTotal = document.createElement('li');
liAlkiTotal.textContent = 'Total: ' + alkiTotal + ' cookies';
document.getElementById('alki').appendChild(liAlkiTotal);