"use strict";

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5am', '6pm', '7pm'];

function RNG(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function displaySalesData(city){
    city.generatehourlySales();

    const cityContainerElement = document.getElementById("city-container");

    const article = document.createElement("article");
    cityContainerElement.appendChild(article);

    const h2 = document.createElement("h2");
    h2.textContent = city.name;
    h2.className = "city-name";
    article.appendChild(h2);

    const ul = document.createElement("ul");
    article.appendChild(ul);

    const hours = city.hours;

    for(let i = 0; i < city.hourlySales.length; i++){
        const li = document.createElement("li");
        li.textContent = `${hours[i]}: ${city.hourlySales[i]} cookies`;
        ul.appendChild(li);
    }
    const totalSalesLi = document.createElement("li");
    totalSalesLi.textContent = `Total: ${city.totalSales()} cookies`;
    ul.appendChild(totalSalesLi);
    article.appendChild(ul);
}

function CityBuilder(name, min, max, avg){

    this.name = name;
    this.minCust = min;
    this.maxCust = max;
    this.avg = avg;
    this.hours = hours;
    this.hourlySales = [];
    this.customer = 0;

    
}

CityBuilder.prototype.generateCustomer = function(){
    this.customer = RNG(this.minCust, this.maxCust);
    return this.customer;
}

CityBuilder.prototype.generatehourlySales = function(){
    for(let i = 0; i < 14; i++){
        let hourlyCust = this.generateCustomer();
        let hourlyCookies = Math.ceil(hourlyCust * this.avg);
        this.hourlySales.push(hourlyCookies);

    }
}

CityBuilder.prototype.totalSales = function(){
    let total = 0;
    for(let i = 0; i < this.hourlySales.length; i++){
        total += this.hourlySales[i];
    }
    return total;
}

const Seattle = new CityBuilder('Seattle', 23, 65, 6.3);
const Tokyo = new CityBuilder('Tokyo', 3, 24, 1.2);
const Dubai = new CityBuilder('Dubai', 11, 38, 3.7);
const Paris = new CityBuilder('Paris', 20, 38, 2.3);
const Lima = new CityBuilder('Lima', 2, 16, 4.6);

displaySalesData(Seattle);
displaySalesData(Tokyo);
displaySalesData(Dubai);
displaySalesData(Paris);
displaySalesData(Lima);
