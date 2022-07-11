
function getEmploy(ID, TYPEOFDATA, SEARCH) {
  fetch('http://137.184.13.42:3001/api/employee/?' + new URLSearchParams({
    id: ID,
    typeOfData: TYPEOFDATA,
  })).then(response => response.json())
    .then(data =>
      jsontohtml(data, SEARCH)
    )
    .catch(err =>
      erroEmpleado()
    );
}

function erroEmpleado() {
  document.getElementById("errorDatos").textContent = "EL EMPLEADO QUE SE ESTA BUSCANDO, NO EXISTE"
  document.getElementById("BusquedaEmpleado").textContent = " ";
}

function jsontohtml(obj, search) {
  for (const prop in obj) {
    sessionStorage.setItem(prop, obj[prop]);
  }
  var tipoDoc = localStorage.getItem("typeOfData")
  if (search === "Generar") {
    if (tipoDoc === "1") {
      window.open("Contratos/Contrato_Individual.html", "Diseño Web");
      window.open("GoBack.html", "_self");
    }
    if (tipoDoc === "2") {
      window.open("Contratos/cit_capacitacion.html", "Diseño Web");
      window.open("GoBack.html", "_self");
    }
  }
  if (search === "Buscar") {
    var nombre = sessionStorage.getItem("employee_name");
    if (nombre === "null") {
      nombre = " (Campo pendiente a llenar en fortia) ";
    }
    var apellido1 = sessionStorage.getItem("employee_last_name");
    if (apellido1 === "null") {
      apellido1 = " (Campo pendiente a llenar en fortia) ";
    }
    var apellido2 = sessionStorage.getItem("employee_second_last_name");
    if (apellido2 === "null") {
      apellido2 = " (Campo pendiente a llenar en fortia) ";
    }

    var nombreCompleto = nombre + " " + apellido1 + " " + apellido2;
    document.getElementById("BusquedaEmpleado").textContent = " EMPLEADO: " + nombreCompleto
  }

}

function typeSelect(type) {
  localStorage.setItem("typeOfData", type);
}

function buscar() {
  var id = document.getElementById("numOrden").value;
  var type = localStorage.getItem("typeOfData")
  if (id) {
    document.getElementById("errorDatos").innerHTML = ""
    document.getElementById("numOrden").innerHTML = ""
    getEmploy(id, type, "Buscar")
  } else {
    document.getElementById("errorDatos").innerHTML = "INGRESA UN NUMERO DE ORDEN."
  }
}

function boton() {
  var id = document.getElementById("numOrden").value;
  var type = localStorage.getItem("typeOfData")
  if (id) {
    document.getElementById("errorDatos").innerHTML = ""
    document.getElementById("numOrden").innerHTML = ""
    getEmploy(id, type, "Generar")

  } else {
    document.getElementById("errorDatos").innerHTML = "INGRESA UN NUMERO DE ORDEN."
  }
}