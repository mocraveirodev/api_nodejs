const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

router.get('/', auth, (req, res) => {
    return res.send({
        message: 'Tudo ok com o méodo GET da raiz.'
    })
});

router.post('/', (req, res) => {
    return res.send({
        message: 'Tudo ok com o méodo POST da raiz.'
    })
});

module.exports = router;