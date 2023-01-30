
/*
    ===== Código de TypeScript =====
*/

class NomberPerson {
    constructor(
        public name: string, 
        public adress: string,) {}
}

class Hero extends NomberPerson {
    // alterEgo: string;
    // realName: string;
    // age: number;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
        ) {
        super(realName, 'Gotic City');
    }
}

const batman = new Hero('Batman', 45, 'Bruce W.');

console.log(batman);
