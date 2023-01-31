
/*
    ===== Código de TypeScript =====
*/
// <T> = Tipo generico
function whoTypeAm<T>(argument: T) {
    return argument;
}

let amString = whoTypeAm('Hello world');
let amNumber = whoTypeAm(1500);
let amArray = whoTypeAm( [0, 1, 2, 3, 4, 5] );

let amExplicit = whoTypeAm<number>(500);

