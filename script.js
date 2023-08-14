const DATA_URL = "series.json";

const container = document.getElementById("seriesContainer");

function showData(dataArray) {
    for (const item of dataArray) {
        seriesContainer.innerHTML += `<p> ${item.portada} ${item.titulo} </p>`;
    }
}
fetch(DATA_URL)
  .then((response) => response.json())
  .then((data) => showData(data.lista_series))
  .catch((error) => console.error("Error al obtener los datos:", error));