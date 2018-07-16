'use strict';

var firstAndPike =  {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  random: function() {
    return Math.floor(Math.random()* (this.maxCustomers-this.minCustomers)) + this.minCustomers;
  },
  CookiesPerHour: [],
};

firstAndPike.random(firstAndPike.maxCustomers, firstAndPike.minCustomers);
console.log(firstAndPike.random());

var SeaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  random: function() {
    return Math.floor(Math.random()* (this.maxCustomers-this.minCustomers)) + this.minCustomers;
  },
  CookiesPerHour: [],
};

SeaTac.random(SeaTac.minCustomers, SeaTac.maxCustomers);
console.log(SeaTac.random());

var SeaCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  random: function() {
    return Math.floor(Math.random()* (this.maxCustomers-this.minCustomers)) + this.minCustomers;
  },
  CookiesPerHour: [],
};

SeaCenter.random(SeaCenter.minCustomers, SeaCenter.maxCustomers);
console.log(SeaCenter.random());

var CapHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  random: function() {
    return Math.floor(Math.random()* (this.maxCustomers-this.minCustomers)) + this.minCustomers;
  },
  CookiesPerHour: [],
};

CapHill.random(CapHill.minCustomers, CapHill.maxCustomers);
console.log(CapHill.random());

var Alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  random: function() {
    return Math.floor(Math.random()* (this.maxCustomers-this.minCustomers)) + this.minCustomers;
  },
  CookiesPerHour: [],
};

Alki.random(Alki.minCustomers, Alki.maxCustomers);
console.log(Alki.random());