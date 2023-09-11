class Potencia {
    constructor(base, exponente) {
        this.base = base;
        this.exponente = exponente;
    }

    calcularPotencia() {
        return Math.pow(this.base, this.exponente);
    }

    mostrarResultado() {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `El resultado de ${this.base} elevado a la ${this.exponente} es: ${this.calcularPotencia()}`;
    }
}

document.getElementById('potenciaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const base = parseInt(document.getElementById('base').value);
    const exponente = parseInt(document.getElementById('exponente').value);

    const potencia = new Potencia(base, exponente);
    potencia.mostrarResultado();
});
