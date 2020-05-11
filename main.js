// REST

const usuario = {
    nome: 'Andrew',
    idade: 21,
    empresa: 'teste'

};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);
