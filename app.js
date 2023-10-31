"use strict";


const Seattle = {
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avg: 6.3,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5am', '6pm', '7pm'],
    hourlySales: [],
    customer: 0,
    

    generateCustomer: function (){    
        this.customer = RNG(this.minCust, this.maxCust);
        return this.customer;
    },

    generatehourlySales: function(){
        for(let i = 0; i < 14; i++){
            let hourlyCust = this.generateCustomer();
            let hourlyCookies = Math.ceil(hourlyCust * this.avg);
            this.hourlySales.push(hourlyCookies);

        }
    },

    totalSales: function()
    {
        let total = 0;
        for(let i = 0; i < this.hourlySales.length; i++){
            total += this.hourlySales[i];
        }
        return total;
    },


};

const Tokyo = {
    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avg: 1.2,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5am', '6pm', '7pm'],
    hourlySales: [],
    customer: 0,
    

    generateCustomer: function (){    
        this.customer = RNG(this.minCust, this.maxCust);
        return this.customer;
    },

    generatehourlySales: function(){
        for(let i = 0; i < 14; i++){
            let hourlyCust = this.generateCustomer();
            let hourlyCookies = Math.ceil(hourlyCust * this.avg);
            this.hourlySales.push(hourlyCookies);

        }
    },

    totalSales: function()
    {
        let total = 0;
        for(let i = 0; i < this.hourlySales.length; i++){
            total += this.hourlySales[i];
        }
        return total;
    },


};

const Dubai = {
    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avg: 3.7,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5am', '6pm', '7pm'],
    hourlySales: [],
    customer: 0,
    

    generateCustomer: function (){    
        this.customer = RNG(this.minCust, this.maxCust);
        return this.customer;
    },

    generatehourlySales: function(){
        for(let i = 0; i < 14; i++){
            let hourlyCust = this.generateCustomer();
            let hourlyCookies = Math.ceil(hourlyCust * this.avg);
            this.hourlySales.push(hourlyCookies);

        }
    },

    totalSales: function()
    {
        let total = 0;
        for(let i = 0; i < this.hourlySales.length; i++){
            total += this.hourlySales[i];
        }
        return total;
    },


};

const Paris = {
    name: 'Paris',
    minCust: 20,
    maxCust: 38,
    avg: 2.3,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5am', '6pm', '7pm'],
    hourlySales: [],
    customer: 0,
    

    generateCustomer: function (){    
        this.customer = RNG(this.minCust, this.maxCust);
        return this.customer;
    },

    generatehourlySales: function(){
        for(let i = 0; i < 14; i++){
            let hourlyCust = this.generateCustomer();
            let hourlyCookies = Math.ceil(hourlyCust * this.avg);
            this.hourlySales.push(hourlyCookies);

        }
    },

    totalSales: function()
    {
        let total = 0;
        for(let i = 0; i < this.hourlySales.length; i++){
            total += this.hourlySales[i];
        }
        return total;
    },


};

const Lima = {
    name: 'Lima',
    minCust: 2,
    maxCust: 16,
    avg: 4.6,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5am', '6pm', '7pm'],
    hourlySales: [],
    customer: 0,
    

    generateCustomer: function (){    
        this.customer = RNG(this.minCust, this.maxCust);
        return this.customer;
    },

    generatehourlySales: function(){
        for(let i = 0; i < 14; i++){
            let hourlyCust = this.generateCustomer();
            let hourlyCookies = Math.ceil(hourlyCust * this.avg);
            this.hourlySales.push(hourlyCookies);

        }
    },

    totalSales: function()
    {
        let total = 0;
        for(let i = 0; i < this.hourlySales.length; i++){
            total += this.hourlySales[i];
        }
        return total;
    },


};

function RNG(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let hours = Seattle.hours;


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

displaySalesData(Seattle);
displaySalesData(Tokyo);
displaySalesData(Dubai);
displaySalesData(Paris);
displaySalesData(Lima);
