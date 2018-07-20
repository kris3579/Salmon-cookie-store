'use strict';

var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 am', '8:00 am', 'Daily Total'];
var allStores = [];
var totalByHourArray = ['Totals'];

// Contructer function calls calCookiesPerHour and rowTotal for each new store, setting its cookiesPerHour array up to be used on a table row
function Store(name, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHour = [];
  this.totals = 0;

  // Pushes itself to the allStores array
  allStores.push(this);
  // Runs its own calcCookiesPerHour and rowTotal functions upon creation, and stores values in its cookiesPerHour array
  this.calcCookiesPerHour();
  this.rowTotal();
  // Renders itself
  this.render();
}

var tblEl = document.createElement('table');
createTable();

// Calculates a random number of customers every hour, this is called within the calcCookiesPerHour prototype function
Store.prototype.calcCustomersPerHour = function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
};

// Calculates the number of cookies each hour by multyplying the results of calcCustomersPerHour by this.avgCookiesPerCustomer, this number is then pushed
// to this.cookiesPerHour array as a rounded number
Store.prototype.calcCookiesPerHour = function () {
  for (var i = 0; i < storeHours.length - 1; i++) {
    this.cookiesPerHour.push(Math.round(this.calcCustomersPerHour(this.minCustomers, this.maxCustomers) * this.avgCookiesPerCustomer));
  }
};

// thisStoresTotal takes each stores initial totals value of 0, and goes through a loop in which it adds each value from the this.cookiesPerHour array
// to iteself. Then thisStoresTotal is also pushed to the this.cookiesPerHour array as the total value of the row.
Store.prototype.rowTotal = function () {
  var thisStoresTotal = this.totals;
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    thisStoresTotal += this.cookiesPerHour[i];
  }
  this.cookiesPerHour.push(Math.round(thisStoresTotal));
};


Store.prototype.render = function () {
  // Variables are defined for creating a row for a new store and creating a () for the store name
  var trStoreEl = document.createElement('tr');
  var tdNameEl = document.createElement('td');
  // textContent fills the name () created with this.name
  tdNameEl.textContent = this.name;
  // appendChild applies the name just created to the first position on our new stores row
  trStoreEl.appendChild(tdNameEl);
  for (var i = 0; i < storeHours.length; i++) {
    // Variable defined for creating a () for data
    var tdDataEl = document.createElement('td');
    // Fill () with this.cookiesPerHour[i]
    tdDataEl.textContent = this.cookiesPerHour[i];
    // Append () to the new store row created, In other words the loop creates and fills a () with each value in the cookiesPerHour array
    trStoreEl.appendChild(tdDataEl);
  }
  // Append complete store row to the table
  tblEl.appendChild(trStoreEl);
  // Run the columnTotal function, recalculating the column totals, then running the footer function to recreate the footer row
  columnTotal();
};

function columnTotal() {
  var hourTotal = 0;
  for (var hours in storeHours) {
    for (var store in allStores) {
      // The hourTotal adds the cookiesPerHour value at the same index as hours, for every store, in other words it adds the whole column for every hour
      hourTotal += allStores[store].cookiesPerHour[hours];
    }
    // Push hourTotal into the totalByHourArray to be appended to the footer
    totalByHourArray.push(hourTotal);
    // Reset the hour total to 0 for the next loop for next hour
    hourTotal = 0;
  }
  // run the footer function, destroying the current table footer and recreating for correct column total and positioning
  footer();
}

function createTable() {
  // Variables for a header row and ()
  var trHeaderEl = document.createElement('tr');
  var thBlankEl = document.createElement('th');
  // Fills first () on header row with nothing
  thBlankEl.textContent = '';
  // Puts it on row
  trHeaderEl.appendChild(thBlankEl);
  for (var i = 0; i < storeHours.length; i++) {
    // Variable for createing a header ()
    var thEl = document.createElement('th');
    // Fills it with one of the hours of the day, and at the end 'Totals'
    thEl.textContent = storeHours[i];
    // Appends to created header row
    trHeaderEl.appendChild(thEl);
  }
  // Appends complete header row to the table
  tblEl.appendChild(trHeaderEl);
  // Appends the table itself to a section in the HTML with the id 'main-content'
  document.getElementById('main-content').appendChild(tblEl);
}

// Variable for a footer row and a footer ()
var trFootEl = document.createElement('tr');
// here we give the footer an id of 'tfooter' so we can reset it later
trFootEl.setAttribute('id', 'tfooter');
var tdFootEl = document.createElement('td');

function footer() {
  // if (tblEl) {
  //   tblFoot.tblEl.removeChild(tblFoot);
  // }
  for (var x = 0; x < totalByHourArray.length; x++) {
    // Fills footer () with the values of totalByHourArray, which has the column totals pushed by the columnTotal() function
    tdFootEl.textContent = totalByHourArray[x];
    //Appends footer () to the footer row
    trFootEl.appendChild(tdFootEl);
  }
  // Append the footer to the table
  tblEl.appendChild(trFootEl);
  // Reset totalByHourArray
  for (var i = 0; i < 16; i++) {
    totalByHourArray.pop();
  }
}


// for (var store of allStores) {
//   store.render();
// }

new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 37, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);