const pantallaValorAnterior = document.getElementById("valor-anterior");
const pantallaValorActual = document.getElementById("valor-actual");
const botonesDigitos = document.querySelectorAll(".digitos");
const botonesOperadores = document.querySelectorAll(".operador");
const pantalla = new Pantalla(pantallaValorAnterior, pantallaValorActual)

botonesDigitos.forEach(boton  => {
    boton.addEventListener('click', () => pantalla.insertarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => pantalla.computar(boton.getAttribute('value')));
});