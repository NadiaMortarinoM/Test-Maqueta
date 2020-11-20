var calculate = document.getElementById('calculate');
var inputField = document.getElementById('inputField');

calculate.addEventListener('click', validarIngreso);
inputField.addEventListener('click', pages);

function pages() {
    alert('gracias por elegirnos');
};

function validarIngreso () {
    alert('Hola debes seleccionar al menos un producto 🙄');
};

