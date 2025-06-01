const {getTodosFav, insereFav, deletaFavById} = require("../services/favoritos")

function getFavs(req, res){
    try{
        const favoritos = getTodosFav()
        res.send(favoritos)
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function postFav(req, res){
    try{
        const id = req.params.id
        insereFav(id)
        res.status(201)
        res.send("Livro favoritado com sucesso!")
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deletaFav(req,res){
    try{
        const id = req.params.id
        if(id && Number(id)){
            deletaFavById(id)
            res.send("Favorito deletado com sucesso!")
        }else{
            res.status(422)
            res.send("Id inválido")
        }
    }catch(error){
        res.status(500)
        res.send(error.message)           
    }
}

module.exports = {
    getFavs,
    postFav,
    deletaFav
}