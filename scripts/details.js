const queryString = location.search;
const params = new URLSearchParams(queryString);
const eventoId = params.get('id');

async function getEvento(eventoId) {
  const response = await fetch(`https://mindhub-xj03.onrender.com/api/amazing?id=${eventoId}`);
  const data = await response.json();
  return data.events.find(evento => evento._id == eventoId);
}

getEvento(eventoId).then(evento => {
  cardDetails(evento);
}).catch(error => {
  console.error(error);
});
