
/*
    ===== Código de TypeScript =====
*/

import { calculaISV, Product } from "./06-desestructuracion-funcion";

const shoppingCart: Product[] = [
    {
        description: 'Phone 1',
        price: 1500000
    },
    {
        description: 'Phone 2',
        price: 2800000
    }
];

const [total, isv] = calculaISV(shoppingCart);

console.log('Total: ', total);
console.log('ISV: ', isv);
