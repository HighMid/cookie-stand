'use strict';

const cityInfo = [
    { name: "Seattle", location: "420 Floppin Fish Lane" , hours: "6am - 7pm" , phone: "(206) 420-1337"},
    { name: "Tokyo", location: "1 Chome-23-10 Jinnan" , hours: "6am - 7pm" , phone: "(64) 3-6416-9222"},
    { name: "Dubai", location: "Crescent Rd" , hours: "6am - 7pm" , phone: "(971) 456-7891"},
    { name: "Paris", location: "Champ de Mars, 5 Av." , hours: "6am - 7pm" , phone: "(33)-4-52-21-65-87"},
    { name: "Lima", location: "Jirón Junín cdra. 1" , hours: "6am - 7pm" , phone: "(011) 51 1 1234567"},
]

function displayCityInfo() {
    const citiesInfoSection = document.querySelector(".cities-info");
  
    cityInfo.forEach(city => {
      // Create the article element for each city
      const article = document.createElement('article');
      
      // Add the city name
      const h3 = document.createElement('h3');
      h3.textContent = city.name;
      article.appendChild(h3);
      
      // Add the location paragraph
      const locationP = document.createElement('p');
      locationP.textContent = `Location: ${city.location}`;
      article.appendChild(locationP);
      
      // Add the contact hours paragraph
      const hoursP = document.createElement('p');
      hoursP.textContent = `Contact Hours: ${city.hours}`;
      article.appendChild(hoursP);
      
      // Add the phone number paragraph
      const phoneP = document.createElement('p');
      phoneP.textContent = `Phone: ${city.phone}`;
      article.appendChild(phoneP);
      
      // Append the article to the cities-info section
      citiesInfoSection.appendChild(article);
    });
  }
  
  displayCityInfo();