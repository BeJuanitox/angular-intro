
/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    vol: number;
    sec: number;
    song: string;
    details: Details;
}

interface Details {
    autor: string;
    year: number;
}

const reproductor: Reproductor = {
    vol: 59,
    sec: 96,
    song: 'Todo lo bueno tarda',
    details: {
        autor: 'Alcolirykoz',
        year: 2021
    }
}

const { vol, sec, song, details } = reproductor;
const { autor, year} = details;

// console.log('El volumen actuaL es: ', vol);
// console.log('El segundo actuaL es: ', sec);
// console.log('La canción actuaL es: ', song);
// console.log('El autor es: ', autor);
// console.log('El año de lanzamiento es: ', year);


const rl: string[] = ['Octane', 'Dominus', 'Fennec'];
const [ c1, c2, c3] = rl;

// console.log('Fav 1: ', rl[1]);
// console.log('Fav 2: ', rl[0]);
console.log('Fav 3: ', c2);
