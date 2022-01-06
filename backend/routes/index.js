const express = require ('express')

const router = express.Router()

router.get('/bonjour', function(req, res){
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Bonjour à Tout le Monde!')
})


module.exports = router;
