// Obtener referencia al elemento HTML para mostrar el valor anterior
const pantallaValorAnterior = document.getElementById("valor-anterior");
// Obtener referencia al elemento HTML para mostrar el valor actual
const pantallaValorActual = document.getElementById("valor-actual");
// Obtener referencias a todos los botones de dígitos
const botonesDigitos = document.querySelectorAll(".digitos");
// Obtener referencias a todos los botones de operadores
const botonesOperadores = document.querySelectorAll(".operador");
// Crear una instancia de la clase Pantalla con los elementos HTML de la pantalla
const pantalla = new Pantalla(pantallaValorAnterior, pantallaValorActual);

// Agregar un event listener a cada botón de dígito para que al hacer clic se inserte el número correspondiente en la pantalla
botonesDigitos.forEach(boton  => {
    boton.addEventListener('click', () => pantalla.insertarNumero(boton.innerHTML));
});

// Agregar un event listener a cada botón de operador para que al hacer clic se realice la operación correspondiente
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => pantalla.computar(boton.getAttribute('value')));
});
