const fs = require("fs")
const { json } = require("stream/consumers")

function getTodosFav(){
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function insereFav(id){
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))
    const livroInserido = livros.find(livro => livro.id === id)

    const novaListaDeFav = [...favoritos, livroInserido]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFav))
}

function deletaFavById(id){
    const favoritos =JSON.parse(fs.readFileSync('favoritos.json'))
    const livrosFiltrados = favoritos.filter(favorito => favorito.id !== id)

    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosFav,
    insereFav,
    deletaFavById,
}