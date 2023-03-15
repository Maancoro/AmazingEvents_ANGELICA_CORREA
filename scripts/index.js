import data from "./data.js"

//constante capturadas y variables
const contenedor = document.getElementById('contenedor')
const input = document.querySelector('input')

// llamada de funciones

input.addEventListener('input',()=>{
  let arrayFiltrado = filtrarPorTexto(data,input.value)
  agregarCards(arrayFiltrado)
})



agregarCards(data)




//funciones
function agregarCards(array) {
  
  let cards = ''
  array.forEach(elemento => {
      cards +=
      `<div class="col">
        <div class="card">
          <img src=${elemento.image} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><b>${elemento.name}</b></h5>
            <p class="card-text"><b>${elemento.date}</b></p>
            <p class="card-text">${elemento.description}</p>
            <p class="card-text">${elemento.category}</p>
            <div class="footer-card d-flex">
               <p><strong>Precio $${elemento.price}</strong></p>
              <a href="./details.html?id=${elemento._id}" class="btn btn-primary">ver mas</a>
            </div>
          </div>
        </div>
      </div>`;
    });
  
   contenedor.innerHTML = cards
}

 function filtrarPortexto(texto, data){
    let arrayFiltrado = data.filter(elemento => elemento.name.toLowerCase().
    includes(texto.toLowerCase()) )
    return arrayFiltrado
 }
 