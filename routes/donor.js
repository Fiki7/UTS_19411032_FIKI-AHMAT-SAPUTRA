const router = require('express').Router()
const donorController = require('../controller/donor')

router.post('/insert', (req, res) => {
    donorController.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
    donorController.getAll(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    donorController.getById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.put('/update/:id', (req, res) => {
    donorController.update(req.params.id, req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res) =>{
    donorController.delete(req.params.id)
        .then(result => res.json(result))
        .catch(result => res.json(err))
})

module.exports = router
