const {Router} = require("express")
const { getFavs, postFav, deletaFav } = require("../controllers/favoritos")

const router = Router()

router.get('/', getFavs)

router.post('/:id', postFav)

router.delete('/:id', deletaFav)

module.exports = router