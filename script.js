const DATA_URL = "series.json";

const container = document.getElementById("seriesContainer");

function showData(dataArray) {
    for (const item of dataArray) {
        seriesContainer.innerHTML += `<p> ${item.portada} <br> ${item.titulo} <br> ${item.cantidad_temporadas} <br> ${item.director} <br> ${item.genero} <br><br></p>`;
    }
}
fetch(DATA_URL)
  .then((response) => response.json())
  .then((data) => showData(data.lista_series))
  .catch((error) => console.error("Error al obtener los datos:", error));