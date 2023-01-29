
/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    nombre: string;
    edad: number;
    direccion: Direccion ;//{
    //     calle: string;
    //     pais: string;
    //     ciudad: string;
    // }

    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHero: SuperHero = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: '4 sur',
        pais: 'Polombia',
        ciudad: 'Medayork'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHero.mostrarDireccion();
console.log(direccion);