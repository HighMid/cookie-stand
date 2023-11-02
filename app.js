"use strict";

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5am', '6pm', '7pm'];


const cityForm = document.getElementById('addCityForm');

// const cityInfo = [
//     { name: "Seattle", location: "420 Floppin Fish Lane" , hours: "6am - 7pm" , phone: "(206) 420-1337"},
//     { name: "Tokyo", location: "1 Chome-23-10 Jinnan" , hours: "6am - 7pm" , phone: "(64) 3-6416-9222"},
//     { name: "Dubai", location: "Crescent Rd" , hours: "6am - 7pm" , phone: "(971) 456-7891"},
//     { name: "Paris", location: "Champ de Mars, 5 Av." , hours: "6am - 7pm" , phone: "(33)-4-52-21-65-87"},
//     { name: "Lima", location: "Jirón Junín cdra. 1" , hours: "6am - 7pm" , phone: "(011) 51 1 1234567"},
// ]

function RNG(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function headerRow(){

        const cityContainerElement = document.getElementById("city-container");

        // Adding HeaderRow

        const tableElem = document.createElement("table");
        tableElem.classList.add("table");
        cityContainerElement.appendChild(tableElem);
    
        const headerRow = document.createElement("tr");
        headerRow.classList.add("header-row");
        tableElem.appendChild(headerRow);
    
        const cityHeaderCell = document.createElement("th");
        cityHeaderCell.classList.add("location-header");
        headerRow.appendChild(cityHeaderCell);
        cityHeaderCell.textContent = "Location";
    
        for(let i = 0; i < hours.length ; i++){
            const hourHeaderCell = document.createElement("th");
            headerRow.appendChild(hourHeaderCell);
            hourHeaderCell.textContent = hours[i];
        }

        const totalHeaderCell = document.createElement("th");
        headerRow.appendChild(totalHeaderCell);
        totalHeaderCell.textContent = "Location Totals";

    return tableElem;
}

function footerRow(tableElem){

    const existingFooterRow = document.querySelector('.footer-row');
    if (existingFooterRow) {
        existingFooterRow.remove();
    }

    const footerRow = document.createElement("tr");
    footerRow.classList.add("footer-row");
    tableElem.appendChild(footerRow);

    const footerTotalRow = document.createElement("td");
    footerTotalRow.textContent = "Hourly Totals for All Locations";
    footerRow.appendChild(footerTotalRow);

    let totalCookies = 0;
    for (let i = 0; i < CityBuilder.hourTotals.length; i++){
        const footerDataRow = document.createElement("td");
        footerRow.appendChild(footerDataRow);
        footerDataRow.textContent = CityBuilder.hourTotals[i];
        totalCookies += CityBuilder.hourTotals[i];
    }

    const footerCookieTotal = document.createElement("td");
    footerRow.appendChild(footerCookieTotal);
    footerCookieTotal.textContent = totalCookies;
}



function CityBuilder(name, min, max, avg){

    this.name = name;
    this.minCust = min;
    this.maxCust = max;
    this.avg = avg;
    this.hours = hours;
    this.hourlySales = [];
    this.customer = 0;
    this.total = 0;
    
}

cityForm.addEventListener('submit',
    function (event){
        event.preventDefault();
        const location = event.target.location.value;
        const minCustomer = event.target.minCustomers.value;
        const maxCustomer = event.target.maxCustomers.value;
        const averageCookie = event.target.avgCookies.value;

        const newLocation = new CityBuilder(location, minCustomer, maxCustomer, averageCookie);

        cityForm.reset();
        newLocation.displaySalesData(tableElem);
        footerRow(tableElem);
    }
);

CityBuilder.hourTotals = new Array(14).fill(0);

CityBuilder.prototype.generateCustomer = function(){
    this.customer = RNG(this.minCust, this.maxCust);
    return this.customer;
}

CityBuilder.prototype.generatehourlySales = function(){
    for(let i = 0; i < 14; i++){
        let hourlyCust = this.generateCustomer();
        let hourlyCookies = Math.ceil(hourlyCust * this.avg);
        this.hourlySales.push(hourlyCookies);
        CityBuilder.hourTotals[i] += hourlyCookies;
    }
}

CityBuilder.prototype.totalSales = function(){
    let total = 0;
    for(let i = 0; i < this.hourlySales.length; i++){
        total += this.hourlySales[i];
    }
    return total;
}

CityBuilder.prototype.displaySalesData = function(tableElem){

    this.generatehourlySales();
    this.total += this.totalSales();

    const dataRow = document.createElement("tr");
    tableElem.appendChild(dataRow);

    const cityDataCell = document.createElement("td");
    dataRow.appendChild(cityDataCell);
    cityDataCell.classList.add("City-Names");
    cityDataCell.textContent = this.name;

    for(let i = 0; i < this.hourlySales.length; i++){
        const hourDataCell = document.createElement("td");
        dataRow.appendChild(hourDataCell);
        hourDataCell.classList.add("why");
        hourDataCell.textContent = this.hourlySales[i];
    }

    
    const cityTotalCell = document.createElement("td");
    dataRow.appendChild(cityTotalCell);
    cityTotalCell.textContent = this.total;
    footerRow(tableElem);
}

const Seattle = new CityBuilder('Seattle', 23, 65, 6.3);
const Tokyo = new CityBuilder('Tokyo', 3, 24, 1.2);
const Dubai = new CityBuilder('Dubai', 11, 38, 3.7);
const Paris = new CityBuilder('Paris', 20, 38, 2.3);
const Lima = new CityBuilder('Lima', 2, 16, 4.6);

const tableElem = headerRow();

Seattle.displaySalesData(tableElem);
Tokyo.displaySalesData(tableElem);
Dubai.displaySalesData(tableElem);
Paris.displaySalesData(tableElem);
Lima.displaySalesData(tableElem);

footerRow(tableElem);
