'use strict';

var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 am', '8:00 am', 'Daily Total'];
var allStores = [];
var totalByHourArray = ['Totals',];

function Store(name, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHour = [];
  this.totals = 0;

  allStores.push(this);
}

var pike = new Store('First and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new Store('Seattle Center', 11, 37, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var tblEl = document.createElement('table');

Store.prototype.calcCustomersPerHour = function () {
  return Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers)) + this.minCustomers) * this.avgCookiesPerCustomer;
};

Store.prototype.calcCookiesPerHour = function () {
  this.cookiesPerHour.push(Math.round(this.calcCustomersPerHour(this.minCustomers, this.maxCustomers)));
};

Store.prototype.total = function () {
  this.totals = Math.round(this.totals += this.calcCustomersPerHour(this.maxCustomers, this.minCustomers));
};

Store.prototype.render = function () {
  this.calcCookiesPerHour();
  var trStoreEl = document.createElement('tr');
  var tdNameEl = document.createElement('td');
  tdNameEl.textContent = this.name;
  trStoreEl.appendChild(tdNameEl);

  for (var idx = 0; idx < storeHours.length; idx++) {
    var tdDateEl = document.createElement('td');
    tdDateEl.textContent = this.cookiesPerHour[idx];
    trStoreEl.appendChild(tdDateEl);
  }

  tblEl.appendChild(trStoreEl);
};

function createTable() {
  var trHeaderEl = document.createElement('tr');
  var thBlankEl = document.createElement('th');
  thBlankEl.textContent = '';
  trHeaderEl.appendChild(thBlankEl);

  for (var idx = 0; idx < storeHours.length; idx++) {
    var thEl = document.createElement('th');
    thEl.textContent = storeHours[idx];
    trHeaderEl.appendChild(thEl);
  }
  tblEl.appendChild(trHeaderEl);

  document.getElementById('main-content').appendChild(tblEl);
}

for (var i = 1; i < storeHours.length; i++) {
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
pike.cookiesPerHour.push(pike.totals);
seaTac.cookiesPerHour.push(seaTac.totals);
seaCenter.cookiesPerHour.push(seaCenter.totals);
capHill.cookiesPerHour.push(capHill.totals);
alki.cookiesPerHour.push(alki.totals);

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

createTable();


function columnTotal() {
  var hourTotal = 0;
  for (var hours in storeHours) {
    for (store in allStores) {
      hourTotal += allStores[store].cookiesPerHour[hours];
      console.log(hourTotal);
    }
    totalByHourArray.push(hourTotal);
    hourTotal = 0;
  }
}

columnTotal();
console.log(totalByHourArray);


var formEl = document.getElementById('form1');

formEl.addEventListener('submit', function (event) {
  event.preventDefault();

  console.log(allStores.length);

  var name = event.target.name.value;
  var minCustomers = event.target.minCustomers.value;
  var maxCustomers = event.target.maxCustomers.value;
  var avgCookiesPerCustomer = event.target.avgCookiesPerCustomer.value;

  var newStore = new Store(name, parseInt(minCustomers), parseInt(maxCustomers), parseInt(avgCookiesPerCustomer));
  console.log(allStores);
  for (var j = 1; j < storeHours.length; j++) {
    newStore.calcCustomersPerHour();
    newStore.calcCookiesPerHour();
    newStore.total();
  }
  newStore.cookiesPerHour.push(newStore.totals);
  newStore.render();
});

for (var store of allStores) {
  store.render();
}