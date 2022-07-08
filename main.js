
function getEmploy(ID, TYPEOFDATA) {
  fetch('http://137.184.13.42:3001/api/employee/?' + new URLSearchParams({
    id: ID,
    typeOfData: TYPEOFDATA,
  })).then(response => response.json())
    .then(data =>
      jsontohtml(data)
    )
    .catch(err => document.getElementById("errorDatos").textContent = "EL EMPLEADO QUE SE ESTA BUSCANDO, NO EXISTE"
    );
}

function jsontohtml(obj) {
  for (const prop in obj) {
    sessionStorage.setItem(prop, obj[prop]);
  }
  window.open("Contratos/Contrato_Individual.html", "Diseño Web");
  window.open("GoBack.html", "_self");
}

function typeSelect(type) {
  localStorage.setItem("typeOfData", type);
}

function boton() {
  var id = document.getElementById("numOrden").value;
  var type = localStorage.getItem("typeOfData")
  if (id) {
    document.getElementById("errorDatos").innerHTML = ""
    document.getElementById("numOrden").innerHTML = ""
    getEmploy(id, type)

  } else {
    document.getElementById("errorDatos").innerHTML = "Ingresa un numero de orden."
  }
}