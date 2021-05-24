let aboutMe = {
    name: 'Ana',
    age: 17,
    hair: 'Chestnut',
}

aboutMe.eyes = 'Chocolate'
delete aboutMe.hair

console.log(aboutMe)



let cadastro = [
    {
        nome: 'Júlia',
        idade: 19,
        telefone: '+00 00000-0000',
        amigos: ['Fulano', 'Sicrano', 'Beltrano', 'Alano', 'Mengano']
    },
    {
        nome: 'Aurora',
        idade: 23,
        telefone: '+00 00000-0000',
        amigos: ['Fulano', 'Sicrano', 'Beltrano', 'Alano', 'Mengano']
    },
    {
        nome: 'Sabrina',
        idade: 20,
        telefone: '+00 00000-0000',
        amigos: ['Fulano', 'Sicrano', 'Beltrano', 'Alano', 'Mengano']
    },
    {
        nome: 'Larissa',
        idade: 18,
        telefone: '+00 00000-0000',
        amigos: ['Fulano', 'Sicrano', 'Beltrano', 'Alano', 'Mengano']
    },
    {
        nome: 'Cecília',
        idade: 17,
        telefone: '+00 00000-0000',
        amigos: ['Fulano', 'Sicrano', 'Beltrano', 'Alano', 'Mengano']
    }
]

console.log(cadastro[0].amigos[4])
console.log(cadastro[1].amigos[3])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[1])
console.log(cadastro[4].amigos[0])