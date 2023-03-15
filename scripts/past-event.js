import data from "./data.js"
import {cardDetails} from "./functions.js";

function pastEvents(events, currentDate) {
  const pastEvents = events.filter(event => event.date < currentDate);
  const cards = pastEvents.map(event => {
    return `<div class="col">
      <div class="card">
        <img src=${event.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><b>${event.name}</b></h5>
          <p class="card-text"><b>${event.date}</b></p>
          <p class="card-text">${event.description}</p>
          <div class="footer-card d-flex">
             <p><strong>Precio $${event.price}</strong></p>
           <a href="./details.html?id=${event._id}" class="btn btn-primary">ver mas</a>
          </div>
        </div>
      </div>
    </div>`;
  });
  const cardSection = document.getElementById("cardSection");
  cardSection.innerHTML = cards.join("");
}

pastEvents(data.events, data.currentDate);
