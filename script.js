const DATA_URL = "series.json";
const container = document.getElementById("seriesContainer");

function showData(dataArray) {
  for (const item of dataArray) {
  
    container.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-xl-2">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${item.portada}" alt="Card image cap">
         <h2 class="card-title">${item.titulo}</h2>
        <div class="card-body">
          <p class="card-text"> Temporadas: ${item.cantidad_temporadas}</p><br>
          <p class="card-text"> Directores: ${item.director}</p> <br>
          <p class="card-text"> Géneros: ${item.genero}</p> <br>
          <p class="card-text"> Comentario: 
          <ul>
            <li>${item.comentarios[0].comentario} -${item.comentarios[0].usuario}</p></li>
          </ul>
          
          <br><br><br>
          </div>
        </div>
        </div>`
    
  }
}

fetch(DATA_URL)
  .then((response) => response.json())
  .then((data) => showData(data.lista_series))
  .catch((error) => console.error("Error al obtener los datos:", error));

function print_comentarios() {
  let data_comentarios = "";

  for (let i = 0; i < comentarios.length; i++) {
    let estrellas = comentarios[i].score;
    console.log("estrellas", estrellas);
    if (estrellas == 0) {
      data_comentarios += `
  <div class="list-group-item">
  <p><strong>${comentarios[i].user}</strong> - ${comentarios[i].dateTime} - ${comentarios[i].score} 
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span></p>
             <p>${comentarios[i].description}</P>
            </div>
              `;
    } else if (estrellas == 1) {
      data_comentarios += `
  <div class="list-group-item">
  <p><strong>${comentarios[i].user}</strong> - ${comentarios[i].dateTime} - ${comentarios[i].score} 
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span></p>
     <p>${comentarios[i].description}</P>
    </div>
      `;
    } else if (estrellas == 2) {
      data_comentarios += `
  <div class="list-group-item">
  <p><strong>${comentarios[i].user}</strong> - ${comentarios[i].dateTime} - ${comentarios[i].score} 
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span></p>
   <p>${comentarios[i].description}</P>
  </div>
    `;
    } else if (estrellas == 3) {
      data_comentarios += `
  <div class="list-group-item">
  <p><strong>${comentarios[i].user}</strong> - ${comentarios[i].dateTime} - ${comentarios[i].score} 
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span></p>
   <p>${comentarios[i].description}</P>
  </div>
    `;
    } else if (estrellas == 4) {
      data_comentarios += `
  <div class="list-group-item">
  <p><strong>${comentarios[i].user}</strong> - ${comentarios[i].dateTime} - ${comentarios[i].score} 
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star"></span></p>
   <p>${comentarios[i].description}</P>
  </div>
    `;
    } else if (estrellas == 5) {
      data_comentarios += `
  <div class="list-group-item">
  <p><strong>${comentarios[i].user}</strong> - ${comentarios[i].dateTime} - ${comentarios[i].score} 
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span></p>
   <p>${comentarios[i].description}</P>
  </div>
    `;
    }
  }

  document.getElementById("comentarios").innerHTML = data_comentarios;
}
