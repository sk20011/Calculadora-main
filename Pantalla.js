class Pantalla {
    constructor(pantallaValorAnterior, pantallaValorActual) {
        this.pantallaValorAnterior = pantallaValorAnterior;
        this.pantallaValorActual = pantallaValorActual;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+', 
            dividir: '/',
            multiplicar: 'x',
            restar: '-'     }
    }
    borrarTodosValores() {
        this.valorActual = '0';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calculoMatematico();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }


    imprimirValores() {
        this.pantallaValorActual.textContent = this.valorActual;
        this.pantallaValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calculoMatematico() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);
    
        if (isNaN(valorActual) || isNaN(valorAnterior)) return;
    
        if (this.tipoOperacion === 'restar' && valorAnterior === valorActual) {
            this.valorActual = '0';
        } else {
            this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual);
        }
    }

    insertarNumero(numero) {
        if(numero === ',' && this.valorActual.includes(',')) return;
        if(this.valorActual === '0') {
            this.valorActual = numero.toString();
        } else {
            this.valorActual = this.valorActual.toString() + numero.toString();
        }
        this.imprimirValores();
    }
    
    

}
