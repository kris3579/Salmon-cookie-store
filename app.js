'use strict';

var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 am', '8:00 am', 'Daily Total'];
var allStores = [];
var totalByHourArray = ['Totals'];


function Store(name, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHour = [];
  this.totals = 0;

  allStores.push(this);
  this.calcCookiesPerHour();
  this.rowTotal();
}

var tblEl = document.createElement('table');
createTable();

Store.prototype.calcCustomersPerHour = function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
};

Store.prototype.calcCookiesPerHour = function () {
  for (var i = 0; i < storeHours.length - 1; i++) {
    this.cookiesPerHour.push(Math.round(this.calcCustomersPerHour(this.minCustomers, this.maxCustomers)) * this.avgCookiesPerCustomer);
  }
};

Store.prototype.rowTotal = function () {
  var thisStoresTotal = this.totals;
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    thisStoresTotal += this.cookiesPerHour[i];
  }
  this.cookiesPerHour.push(Math.round(thisStoresTotal));
};

Store.prototype.render = function () {
  var trStoreEl = document.createElement('tr');
  var tdNameEl = document.createElement('td');
  tdNameEl.textContent = this.name;
  trStoreEl.appendChild(tdNameEl);
  for (var i = 0; i < storeHours.length; i++) {
    var tdDataEl = document.createElement('td');
    tdDataEl.textContent = this.cookiesPerHour[i];
    trStoreEl.appendChild(tdDataEl);
  }
  tblEl.appendChild(trStoreEl);
};

function createTable() {
  var trHeaderEl = document.createElement('tr');
  var thBlankEl = document.createElement('th');
  thBlankEl.textContent = '';
  trHeaderEl.appendChild(thBlankEl);
  for (var i = 0; i < storeHours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    trHeaderEl.appendChild(thEl);
  }
  tblEl.appendChild(trHeaderEl);
  document.getElementById('main-content').appendChild(tblEl);
}

var tblFootEl = document.createElement('tfoot');
tblFootEl.setAttribute('id', 'tfooter');
var trFootEl = document.createElement('tr');
var tdFootEl = document.createElement('td');

function footer() {
  // if (tblFootEl) {
  //   tblFootEl.tblEl.removeChild(tblFootEl);
  // }
  var tblFootEl = document.createElement('tfoot');
  trFootEl = document.createElement('tr');
  tdFootEl = document.createElement('td');
  for (var x = 0; x < totalByHourArray.length; x++) {
    tdFootEl.textContent = totalByHourArray[x];
    trFootEl.appendChild(tdFootEl);
  }
  tblFootEl.appendChild(trFootEl);
  tblEl.appendChild(tblFootEl);
}


for (var store of allStores) {
  store.render();
}

new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 37, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);