
/*
    ===== Código de TypeScript =====
*/

interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Michel'
}


const passenger2: Passenger = {
    name: 'Vanesa',
    children: ['Valentina', 'Sebastian']
}

function printChildren(passenger: Passenger): void {
    const howManyChildren = passenger.children?.length || 0;

    console.log(howManyChildren);
}

printChildren(passenger1);
