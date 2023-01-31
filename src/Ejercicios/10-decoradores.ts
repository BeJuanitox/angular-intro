
/*
    ===== Código de TypeScript =====
*/

// Los decoradores son funciones que expanden su clase añadiendo funcionalidades especiales


function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

@classDecorator
class mySuperClass {
    public myProperty: string = 'ABC587';

    print() {
        console.log('Hello world')
    }
}


console.log(mySuperClass);

const myClass = new mySuperClass();

console.log(myClass.myProperty);
