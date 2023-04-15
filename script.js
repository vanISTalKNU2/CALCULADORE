function calcular() {
  // Obtener los valores del formulario
  const compra = document.getElementById("compra").value;
  const tarea = document.getElementById("tarea").value;
  const puntos = document.getElementById("puntos").value;

  // Calcular los puntos de tareas
  let PuntosTareas;
  if (compra === "s") {
    PuntosTareas = Math.round(puntos * 0.05) + parseInt(puntos);
  } else {
    PuntosTareas = parseInt(puntos);
  }

  // Crear la tabla de premios
  const tabla = document.getElementById("premios");
  tabla.innerHTML = `
    <tr>
      <th>Premio</th>
      <th>Descripción</th>
    </tr>
    <tr>
      <td>Remuneración de la semana</td>
      <td>${tarea === "s" ? "Sí" : "No"}</td>
    </tr>
    <tr>
      <td>Dinero adicional</td>
      <td>${tarea === "s" ? " $" + Math.floor(PuntosTareas / 350) : "-"}</td>
    </tr>
    <tr>
      <td>Tiempo con intereses</td>
      <td>${tarea === "s" ? "tienes " + Math.floor(PuntosTareas / 300 * 6) + " días a meses CON INTERESES para usar con tus créditos" : "-"}</td>
    </tr>
    <tr>
      <td>Tiempo sin intereses</td>
      <td>${PuntosTareas < 600 ? "tienes 12 días a meses SIN INTERESES para usar con tus créditos" : "tienes " + Math.floor(PuntosTareas / 300 * 4) + " días a meses SIN INTERESES para usar con tus créditos"}</td>
    </tr>
    <tr>
      <td>Intereses anuales</td>
      <td>${PuntosTareas < 1800 ? "Los intereses anuales por el crédito que pidas es del 60%" : "Los intereses anuales por el crédito que pidas es del " + Math.max(60 - Math.floor(PuntosTareas / 1800), 5) + "%"}</td>
    </tr>
  `;
}
