// Nombre ------------------------------------
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
// Nombre ------------------------------------

var puesto = sessionStorage.getItem("work_station_name");
if (puesto === "null") {
    puesto = " (Campo pendiente a llenar en fortia) ";
}

var rfc = sessionStorage.getItem("rfc");
if (rfc === "null") {
    rfc = " (Campo pendiente a llenar en fortia) ";
}


var calle = sessionStorage.getItem("street");
if (calle === "null") {
    calle = " (Campo pendiente a llenar en fortia) ";
}

var colonia = sessionStorage.getItem("district");
if (colonia === "null") {
    colonia = " (Campo pendiente a llenar en fortia) ";
}

var codigo_postal = sessionStorage.getItem("postal_code");
if (codigo_postal === "null") {
    codigo_postal = " (Campo pendiente a llenar en fortia) ";
}

var ciudad = sessionStorage.getItem('city')
if (ciudad === "null") {
    ciudad = " (Campo pendiente a llenar en fortia) ";
}

var domicilio = "CIUDAD " + ciudad + ", CALLE " + calle + ", COLONIA " + colonia + ", CP " + codigo_postal

var salarioDiario = sessionStorage.getItem("daily_wage");
if (salarioDiario === "null") {
    salarioDiario = " (Campo pendiente a llenar en fortia) ";
}

var curp = sessionStorage.getItem("curp");
if (curp === "null") {
    curp = " (Campo pendiente a llenar en fortia) ";
}


var edo_civil = sessionStorage.getItem("marital_status");
if (edo_civil === "null") {
    edo_civil = " (Campo pendiente a llenar en fortia) ";
}

var sexo = sessionStorage.getItem("gender");
if (sexo === "null") {
    sexo = " (Campo pendiente a llenar en fortia) ";
}

var fechaNacimiento = sessionStorage.getItem("birth_date");

var year = fechaNacimiento.substring(0, 4);
var age = new Date().getFullYear() - year

if (fechaNacimiento === "null") {
    fechaNacimiento = " (Campo pendiente a llenar en fortia) ";
}

var entryDate = sessionStorage.getItem("entry_date");

var yearEntryDate = entryDate.substring(0, 4);

var monthEntryDate = entryDate.substring(4, 6);

var dayEntryDate = entryDate.substring(6, 8);

var fechaEntrada = dayEntryDate + "/" + monthEntryDate + "/" + yearEntryDate

if (entryDate === "null") {
    entryDate = " (Campo pendiente a llenar en fortia) ";
}


var nSeguroSocial = sessionStorage.getItem("imss_number");
if (nSeguroSocial === "null") {
    nSeguroSocial = " (Campo pendiente a llenar en fortia) ";
}

var rfcEmpresa = sessionStorage.getItem('business_rfc');

if (rfcEmpresa === "null") {
    rfcEmpresa = " (Campo pendiente a llenar en fortia) ";
}

var direccionEmpresa = sessionStorage.getItem('base_location_name')

let date = new Date();
let dateNow = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
let dayNow = String(date.getDate()).padStart(2, '0');
let monthNow = String(date.getMonth() + 1);

document.getElementById('dayNow').textContent = dayNow

document.getElementById('lugarHoy').textContent = direccionEmpresa

document.getElementById('ciudad').textContent = ciudad
document.getElementById('ciudad2').textContent = ciudad
document.getElementById('ciudad3').textContent = ciudad

// // document.getElementById("fechaHoy").textContent = dateNow


document.getElementById("name").textContent = nombreCompleto
document.getElementById("name2").textContent = nombreCompleto
// document.getElementById("name3").textContent = nombreCompleto


document.getElementById("puesto").textContent = puesto
document.getElementById("puesto2").textContent = puesto
document.getElementById("puesto3").textContent = puesto


// document.getElementById("rfcEmpresa").textContent = rfcEmpresa

document.getElementById("edad").textContent = age

document.getElementById("edoCivil").textContent = edo_civil

// document.getElementById("sexo").textContent = sexo

document.getElementById("curp").textContent = curp

document.getElementById("rfc").textContent = rfc

document.getElementById("domicilio").textContent = domicilio

document.getElementById("fechaEntrada").textContent = fechaEntrada
document.getElementById("fechaEntrada2").textContent = fechaEntrada

// document.getElementById("fechaEntrada2").textContent = fechaEntrada

document.getElementById("salario").textContent = salarioDiario
document.getElementById("salario2").textContent = salarioDiario


