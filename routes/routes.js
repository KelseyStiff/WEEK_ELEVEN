let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next) {
    res.json({'message': 'is this working??????'})
})

module.exports = router