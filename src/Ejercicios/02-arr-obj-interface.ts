
/*
    ===== Código de TypeScript =====
*/

let skills = ['Kaioken', 'Henkidama', 'KameHameHa', 'Healing'];

interface PJ {
    name: string;
    hp: number;
    skills: string[];
    nationality?: string;
}

const pj: PJ = {
    name: 'Kakaroto',
    hp: 100,
    skills: ['Kaioken', 'Henkidama', 'KameHameHa', 'Healing']
}

pj.nationality = 'Vegeta Planet';

console.table(pj);
