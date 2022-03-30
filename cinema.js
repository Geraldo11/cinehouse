let cinema =  "Cine House 2.0.4"
let filmes = require ('./database/catalogo.json')
console.log(cinema) 

//array []
// objeto {}

let filmes = [
    {
        titulo: 'Rambo',
        codigo: 1,
        duracao: 240,
        genero: 'terror',
        emCartaz: true
    },
    {
        titulo: 'Star Wars',
        codigo: 2,
        duracao: 220,
        genero: 'Ficção',
        emCartaz: false
    },
    {
        titulo: 'Senhor do aneis',
        codigo: 3,
        duracao: 300,
        genero: 'fantasia',
        emCartaz: true
},
]

const filme4  = {
    titulo: 'Rambo 2',
    codigo: 4,
    duracao: 240,
    genero: 'terror',
    emCartaz: true
}

filmes.push(filme4) // adiciona no final do array


function buscarFilme(codigo) {
    const filmeEncontrado = filmes.find(function (filme) {
        return filme.codigo == codigo
    })
    return filmeEncontrado
}

const filmeEnc = buscarFilme(2)

if (filmeEnc != undefined) {
    console.log(filmeEnc.titulo)
} else {
    console.log("O filme não foi encontrado")
}

function adicionarFilme(codigo,titulo,duracao,genero,emCartaz){
    const filme = {
        codigo,
        titulo,
        duracao,
        genero,
        emCartaz
    }

    filmes.push(filme)
}

function alterarFilmeEmCartaz (codigo, encontrarFilme ) {
    const filmeEncontrado = encontrarFilme(codigo)

    filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz
    // filmeEncontrado.emCartaz = (filmeEncontrado.emCartaz == true) ? false : true //If ternario
}

alterarFilmeEmCartaz(5, buscarFilme)

const imprimeFilme = (filme, index) => console.log(index + '-' + filme.titulo + ' - ' + filme.emCartaz)

function listarTodosOsFilmes () {
    filmes.forEach(imprimeFilme)
    }

listarTodosOsFilmes()

const filmesFiltrados = filmes.filter(filme => {
    return filme.titulo.includes('2')
})

console.table (filmesFiltrados)

const listarFilmesLongaDuracao = filmes.filter(filme => {
    return filme.duracao > 240
})

console.table(listarFilmesLongaDuracao)

const listarFilmes = filmes.filter(filme => {filme.emCartaz
})

console.table (listarFilmes)