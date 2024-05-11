class Pantalla {
    // Constructor para inicializar la pantalla con los valores anteriores y actuales
    constructor(pantallaValorAnterior, pantallaValorActual) {
        this.pantallaValorAnterior = pantallaValorAnterior; // Elemento HTML donde se mostrará el valor anterior
        this.pantallaValorActual = pantallaValorActual; // Elemento HTML donde se mostrará el valor actual
        this.calculadora = new Calculadora(); // Instancia de la calculadora para realizar operaciones
        this.tipoOperacion = undefined; // Tipo de operación actual
        this.valorActual = ''; // Valor actual en la pantalla
        this.valorAnterior = ''; // Valor anterior en la pantalla
        this.signos = { // Objetos que mapean los signos matemáticos a los nombres de las operaciones
            sumar: '+', 
            dividir: '/',
            multiplicar: 'x',
            restar: '-'     
        }
    }

    // Método para borrar todos los valores en la pantalla
    borrarTodosValores() {
        this.valorActual = '0'; // Reiniciar el valor actual a cero
        this.valorAnterior = ''; // Reiniciar el valor anterior
        this.tipoOperacion = undefined; // Reiniciar el tipo de operación
        this.imprimirValores(); // Actualizar la pantalla mostrando los cambios
    }

    // Método para realizar la operación matemática correspondiente
    computar(tipo) {
        // Realizar el cálculo si no se está presionando el botón de igual repetidamente
        this.tipoOperacion !== 'igual' && this.calculoMatematico();
        this.tipoOperacion = tipo; // Actualizar el tipo de operación
        this.valorAnterior = this.valorActual || this.valorAnterior; // Actualizar el valor anterior
        this.valorActual = ''; // Reiniciar el valor actual para la próxima entrada
        this.imprimirValores(); // Actualizar la pantalla mostrando los cambios
    }

    // Método para borrar el último dígito ingresado
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1); // Eliminar el último dígito del valor actual
        this.imprimirValores(); // Actualizar la pantalla mostrando los cambios
    }

    // Método para mostrar los valores actuales en la pantalla
    imprimirValores() {
        this.pantallaValorActual.textContent = this.valorActual; // Mostrar el valor actual en la pantalla
        this.pantallaValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`; // Mostrar el valor anterior y el signo de la operación en la pantalla
    }

    // Método para realizar el cálculo matemático
    calculoMatematico() {
        const valorAnterior = parseFloat(this.valorAnterior); // Convertir el valor anterior a número
        const valorActual = parseFloat(this.valorActual); // Convertir el valor actual a número
    
        if (isNaN(valorActual) || isNaN(valorAnterior)) return; // Salir si uno de los valores no es un número
    
        if (this.tipoOperacion === 'restar' && valorAnterior === valorActual) {
            this.valorActual = '0'; // En caso de operación de resta con los mismos valores, el resultado es cero
        } else {
            this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual); // Realizar la operación correspondiente
        }
    }

    // Método para insertar un número en la pantalla
    insertarNumero(numero) {
        if(numero === ',' && this.valorActual.includes(',')) return; // Evitar la inserción de múltiples comas decimales
        if(this.valorActual === '0') {
            this.valorActual = numero.toString(); // Si el valor actual es cero, reemplazarlo con el número ingresado
        } else {
            this.valorActual = this.valorActual.toString() + numero.toString(); // Concatenar el número ingresado al valor actual
        }
        this.imprimirValores(); // Actualizar la pantalla mostrando los cambios
    }
}
