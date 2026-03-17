const usuarios = [   //cria uma variavel que armazena lista(array)
    { nome: "Carlos", idade: 32 },
    { nome: "Ana", idade: 28},
    { nome: "Felipe", idade: 40}
];

//encontrando um objeto-find vai buscar o objeto-==exatamente igual
const ana = usuarios.find(usuario => usuario.nome === "Ana");
console.log(ana);

// Filtrando objetos
const usuariosAcimade30 = usuarios.filter(usuario => usuario.idade > 30 );
console.log(usuarioAcimaDe30);

//Ordenando objetos por idade
const usuariosOrdenadosPorIdade = usuarios.sort((a, b) => a.idade - b.idade);
console.log(usuariosOrdenadosPorIdade);

//Ordenando objetos por idade
const usuariosOrdenadosPorIdade2= usuarios.sort((a, b) => b.idade - a.idade);
console.log(usuariosOrdenadosPorIdade2);