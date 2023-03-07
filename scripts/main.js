import data from "./data.js"

function agregarTodos(array) {
  for(const evento of data.events) {
      const card = `<div class="col">
        <div class="card">
          <img src=${evento.image} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><b>${evento.name}</b></h5>
            <p class="card-text"><b>${evento.date}</b></p>
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