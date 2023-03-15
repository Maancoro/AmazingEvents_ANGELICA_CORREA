import data from "./data.js";
import {cardDetails} from "./functions.js";

function upcommingEvents(array, date) {
  const upcomingEvents = array.filter(evento => evento.date > date);
  const eventCards = upcomingEvents.map(evento => `<div class="col">
    <div class="card">
      <img src=${evento.image} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"><b>${evento.name}</b></h5>
        <p class="card-text"><b>${evento.date}</b></p>
        <p class="card-text">${evento.description}</p>
        <div class="footer-card d-flex">
           <p><strong>Precio $${evento.price}</strong></p>
           <a href="./details.html?id=${evento._id}" class="btn btn-primary">ver mas</a>
        </div>
      </div>
    </div>
  </div>`);
  const cardSection = document.getElementById("cardSection");
  cardSection.innerHTML = eventCards.join("");
}

upcommingEvents(data.events, data.currentDate);


                 
