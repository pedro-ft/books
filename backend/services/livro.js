const fs = require("fs")
const { json } = require("stream/consumers")

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroById(id){
    const livros =JSON.parse(fs.readFileSync('livros.json'))

    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado
}

function insereLivro(livroNovo){
    const livros =JSON.parse(fs.readFileSync('livros.json'))

    const novaListaDeLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id){
    let livrosAtuais =JSON.parse(fs.readFileSync('livros.json'))
    const indiceMod = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMod = {...livrosAtuais[indiceMod], ...modificacoes}
    livrosAtuais[indiceMod] = conteudoMod
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivroById(id){
    const livros =JSON.parse(fs.readFileSync('livros.json'))
    const livrosFiltrados = livros.filter(livro => livro.id !== id)

    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}


module.exports = {
    getTodosLivros,
    getLivroById,
    insereLivro,
    modificaLivro,
    deletaLivroById
}