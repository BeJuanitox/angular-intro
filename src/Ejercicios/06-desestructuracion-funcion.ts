
/*
    ===== Código de TypeScript =====
*/

export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Huawei',
    price: 1200000
}

const tablet: Product = {
    description: 'Ipad',
    price: 2000000
}

export function calculaISV(products: Product[] ): [number, number] {
    let total = 0;

    //products.forEach( (product) => {
    products.forEach( ({price}) => {
        //total += product.price;
        total += price;
    }) 

    return [total, total * 0.15];
}

// const articles = [phone, tablet];

// const [total, isv] = calculaISV(articles);

// console.log('Total: ', total)
// console.log('ISV: ', isv)
