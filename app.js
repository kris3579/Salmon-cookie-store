'use strict';

var firstAndPike =  {
  minCustomers: '23',
  maxCustomers: '65',
  avgCookiesPerCustomer: '6.3',
  customersPerHour: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
};

var SeaTac = {
  minCustomers: '3',
  maxCustomers: '24',
  avgCookiesPerCustomer: '1.2',
  customersPerHour: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
};

var SeaCenter = {
  minCustomers: '11',
  maxCustomers: '38',
  avgCookiesPerCustomer: '3.7',
  customersPerHour: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
};

var CapHill = {
  minCustomers: '20',
  maxCustomers: '38',
  avgCookiesPerCustomer: '2.3',
  customersPerHour: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
};

var Alki = {
  minCustomers: '2',
  maxCustomers: '16',
  avgCookiesPerCustomer: '4.6',
  customersPerHour: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
};