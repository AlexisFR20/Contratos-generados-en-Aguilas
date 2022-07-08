
var nombre = sessionStorage.getItem("employee_name");
var apellido1 = sessionStorage.getItem("employee_last_name");
var apellido2 = sessionStorage.getItem("employee_second_last_name");

var nombreCompleto = nombre + " " + apellido1 + " " + apellido2;

var puesto = sessionStorage.getItem("work_station_name");

var rfc = sessionStorage.getItem("rfc");

var calle = sessionStorage.getItem("street");

var colonia = sessionStorage.getItem("district");

var codigo_postal = sessionStorage.getItem("postal_code");

var salarioDiario = sessionStorage.getItem("daily_wage");

var curp = sessionStorage.getItem("curp");

var edo_civil = sessionStorage.getItem("marital_status");

var sexo = sessionStorage.getItem("gender");

var fechaNacimiento = sessionStorage.getItem("birth_date");

var year = fechaNacimiento.substring(0, 4);

var age = new Date().getFullYear() - year

var nSeguroSocial = sessionStorage.getItem("imss_number");




document.getElementById("name").textContent = nombreCompleto
document.getElementById("name2").textContent = nombreCompleto