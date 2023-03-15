function cardDetails(evento, container){
  let card = document.createElement('div')
  card.classList = ' row gx-5'
  card.innerHTML = 
      `<div class="col-5">
                  <div class="p-3 border bg-light"><img src=${evento.image} class="img-fluid" alt=${evento.name} ></div>
               </div>
               <div class="col-6">
                  <article>
                     <h3>${evento.name} </h3>
                  </article>
                 <div class="parrafo text-center">
                  <p class="card-text"><strong>Date: ${evento.date}</strong></p>
              <p class="card-text"><strong>Description: </strong>${evento.description}</p>
              <p class="card-text"><strong>Category: </strong>${evento.category}</p>
              <p class="card-text"><strong>Place:</strong> ${evento.place}</p>
              <p class="card-text"><strong>Capacity:</strong> ${evento.capacity}</p>
              <p class="card-text"><strong>Assistance:</strong> ${evento.assistance}</p>
              <p><strong>Precio $${evento.price}</strong></p>
               </div>
              
               </div >`
  container.appendChild(card);
};

 export{cardDetails};
