"use strict";
class EmpleadoVentas {
    constructor(nombre, apellidos, correo, nacimiento, unidadVenta, zonaGeografica) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nacimiento = nacimiento;
        this.setCorreo(correo);
        this.setUnidadVenta(unidadVenta);
        this.setZonaGeografica(zonaGeografica);
    }
    getNombre() {
        return this.nombre;
    }
    getApellidos() {
        return this.apellidos;
    }
    setCorreo(minus) {
        this.correo = minus.trim().toLowerCase();
    }
    getCorreo() {
        return this.correo;
    }
    getNacimiento() {
        return this.nacimiento;
    }
    setUnidadVenta(minus) {
        this.unidadVenta = minus.trim().toLowerCase();
    }
    getUnidadVenta() {
        return this.unidadVenta;
    }
    setZonaGeografica(minus) {
        this.zonaGeografica = minus.trim().toLowerCase();
    }
    getZonaGeografica() {
        return this.zonaGeografica;
    }
}
function addEmployee() {
    let employeeName = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let email = document.getElementById('email').value;
    let birthDate = document.getElementById('birthDate').value;
    let sdUnit = document.getElementById('sdUnit').value;
    let area = document.getElementById('area').value;
    const errores = [];
    if (!employeeName) {
        errores.push("Falta nombre.");
    }
    if (!surname) {
        errores.push("Falta apellidos.");
    }
    if (!email || !email.includes("@")) {
        errores.push("Falta email / email no válido.");
    }
    if (!birthDate) {
        errores.push("Falta fecha de nacimiento.");
    }
    if (!sdUnit) {
        errores.push("Falta unidad de venta.");
    }
    const zonas = ["norte", "sur", "este", "oeste"];
    if (!zonas.includes(area.trim().toLowerCase())) {
        errores.push("Falta zona geográfica / zona no válida.");
    }
    if (errores.length > 0) {
        console.error("Errores en el formulario:");
        errores.forEach(e => console.error(e));
        return;
    }
    const nuevoEmpleadoVentas = new EmpleadoVentas(employeeName, surname, email, birthDate, sdUnit, area);
    console.log("Nuevo empleado creado con éxito:", nuevoEmpleadoVentas);
}
