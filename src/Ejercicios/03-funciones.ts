
/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    // return (a + b).toString();
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

const multiplicar = (num: number, otherNum?: number, base: number = 2): number => {
    return num * base;
}

const resultado = multiplicar(10, 5); //el 5 es el opcional por orden de insersión.

interface Perso {
    nomb: string;
    pv: number;
    mostrarPv: () => void;
}

const curar = (personaje: Perso, puntosCurar: number): void => {
    personaje.pv += puntosCurar;
}

const newPerso: Perso = {
    nomb: 'Punisher',
    pv: 50,
    mostrarPv() {
        console.log('Puntos de vida: ', this.pv);
    }
}

curar(newPerso, 30);

newPerso.mostrarPv();

