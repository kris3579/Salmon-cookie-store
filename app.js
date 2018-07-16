'use strict';

var firstAndPike =  {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  random: function() {
    return Math.floor(Math.random()* ((this.maxCustomers-this.minCustomers)) + this.minCustomers) * this.avgCookiesPerCustomer;
  },
  cookiesPerHour: [],
};

var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  random: function() {
    return Math.floor(Math.random()* ((this.maxCustomers-this.minCustomers)) + this.minCustomers) * this.avgCookiesPerCustomer;
  },
  cookiesPerHour: [],
};



var seaCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  random: function() {
    return Math.floor(Math.random()* ((this.maxCustomers-this.minCustomers)) + this.minCustomers) * this.avgCookiesPerCustomer;
  },
  cookiesPerHour: [],
};

var capHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  random: function() {
    return Math.floor(Math.random()* ((this.maxCustomers-this.minCustomers)) + this.minCustomers) * this.avgCookiesPerCustomer;
  },
  cookiesPerHour: [],
};



var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  random: function() {
    return Math.floor(Math.random()* ((this.maxCustomers-this.minCustomers)) + this.minCustomers) * this.avgCookiesPerCustomer;
  },
  cookiesPerHour: [],
};



for (var i = 0; i < 15; i++) {
  firstAndPike.cookiesPerHour.push(firstAndPike.random(firstAndPike.maxCustomers, firstAndPike.minCustomers));
  seaTac.cookiesPerHour.push(seaTac.random(seaTac.minCustomers, seaTac.maxCustomers));
  seaCenter.cookiesPerHour.push(seaCenter.random(seaCenter.minCustomers, seaCenter.maxCustomers));
  capHill.cookiesPerHour.push(capHill.random(capHill.minCustomers, capHill.maxCustomers));
  alki.cookiesPerHour.push(alki.random(alki.minCustomers, alki.maxCustomers));
}
console.log(firstAndPike.cookiesPerHour);
console.log(seaTac.cookiesPerHour);
console.log(seaCenter.cookiesPerHour);
console.log(capHill.cookiesPerHour);
console.log(alki.cookiesPerHour);