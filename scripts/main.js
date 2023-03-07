import data from "./data.js"

/* const container = document.getElementById("container");

for (let i = 0; i < data.events.length; i++) {
  const event = data.events[i];

  
  const card = document.createElement("div");
  const image = document.createElement("img");
  const title = document.createElement("h2");
  const date = document.createElement("p");
  const description = document.createElement("p");
  const category = document.createElement("p");
  const place = document.createElement("p");
  const capacity = document.createElement("p");
  const assistance = document.createElement("p");
  const price = document.createElement("p");
  const button = document.createElement("button");


 card.classList.add("card");
  image.classList.add("card-image");
  title.classList.add("card-title");
  date.classList.add("card-date");
  description.classList.add("card-description");
  category.classList.add("card-category");
  place.classList.add("card-place");
  capacity.classList.add("card-capacity");
  assistance.classList.add("card-assistance");
  price.classList.add("card-price");




  image.src = event.image;
  title.textContent = event.name;
  date.textContent = event.date;
  description.textContent = event.description;
  category.textContent = `Category: ${event.category}`;
  place.textContent = `Place: ${event.place}`;
  capacity.textContent = `Capacity: ${event.capacity}`;
  assistance.textContent = `Assistance: ${event.assistance}`;
  price.textContent = `Price: $${event.price}`;
  button.textContent = "Ver mas";

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(date);
  card.appendChild(description);
  card.appendChild(category);
  card.appendChild(place);
  card.appendChild(capacity);
  card.appendChild(assistance);
  card.appendChild(price);
  container.appendChild(card);
  card.appendChild(button);

} */

function agregarTodos(array) {
  for(const evento of data.events) {
      const card = `<div class="col">
        <div class="card">
          <img src=${evento.image} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><b>${evento.name}</b></h5>
            <p class="card-text">${evento.description}</p>
            <div class="footer-card d-flex">
               <p><strong>Precio $${evento.price}</strong></p>
              <a href="./details.html" class="btn btn-primary">ver mas</a>
            </div>
          </div>
        </div>
      </div>`
      const cardSection = document.getElementById("cardSection")
      cardSection.innerHTML += card
  }
}

agregarTodos(data.events);