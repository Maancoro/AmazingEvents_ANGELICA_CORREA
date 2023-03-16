function superFiltro(lista) {
  let primerFiltro = filtrarPorNombre(lista, busqueda.value);
  let segundoFiltro = filtrarPorCategoria(primerFiltro);
  mostrarEventos(segundoFiltro);
}
function mostrarEventos(lista) {
  if (lista.length == 0) {
    eventDiv.innerHTML = "<h2> &#10060No results found</h2>";
    return;
  }
  let cardHtml = "";
  lista.forEach((element) => {
    cardHtml += `
   <div class="col">
    <div class="card">
      <img src=${element.image} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"><b>${element.name}</b></h5>
        <p class="card-text text-center"><b>${element.date}</b></p>
        <p class="card-text">${element.description}</p>
        <div class="footer-card d-flex">
           <p><strong>Precio $${element.price}</strong></p>
           <a href="./details.html?id=${element._id}" class="btn btn-primary">ver mas</a>
    </div>
    </div>
   </div>
  </div>`;
  });
  eventDiv.innerHTML = cardHtml;
}

function mostrarCheck(lista) {
  let check = "";
  lista.forEach((element) => {
    check += ` <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="${element}" value="${element}">
        <label class="form-check-label" for="${element}">${element}</label>
      </div>`;
  });
  categoriasData.innerHTML = check;
}

function listaDeCategorias(lista) {
  let categorias = [];
  lista.forEach((element) => {
    categorias.push(element.category.toLowerCase());
  });
  categorias = Array.from(new Set(categorias));
  categorias.sort();
  return categorias;
}
function filtrarPorNombre(lista, nombre) {
  let listaFiltrada = lista.filter((element) =>
    element.name.toLowerCase().includes(nombre.toLowerCase())
  );
  return listaFiltrada;
}
function filtrarPorCategoria(lista) {
  let checkBox = document.querySelectorAll("input[type='checkbox']");
  let checkBoxLista = Array.from(checkBox);
  let checkSelecionados = checkBoxLista.filter((check) => check.checked);
  if (checkSelecionados.length == 0) {
    return lista;
  }

  let categorias = checkSelecionados.map((check) => check.value.toLowerCase());
  console.log(categorias);

  let listafiltrada = lista.filter((element) =>
    categorias.includes(element.category.toLowerCase())
  );

  return listafiltrada;
}
function cardDetails(evento){
  let container = document.getElementById("cardDetails");
  let card = "";
  card = `<div class="row gx-5">
            <div class="col-5">
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
                <p class="card-text"><strong>Capacity:</strong> ${evento.capacity}</p>`;
  if(evento.assistance != undefined){
    card = card + `<p class="card-text"><strong>Assistance:</strong> ${evento.assistance}</p>`;
  } else {
    card = card + `<p class="card-text">Estimate: ${evento.estimate}</p`;
  }
  card = card + `
              <p><strong>Precio $${evento.price}</strong></p>
            </div>
          </div >
        </div>`;
  container.innerHTML = card;
}



