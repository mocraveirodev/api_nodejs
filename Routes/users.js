const express = require('express');
const router = express.Router();
const Users = require('../model/user');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
    Users.find({}, (err, data) => {
        if (err) return res.send({ error: 'Erro na consulta de usuários.' });
        
        return res.send(data);
    });
});

router.post('/create', (req, res) => {
    // const obj = req.body;
    const { email, password } = req.body;

    if (!email || !password) return res.send({ error: 'Dados Insuficientes.' });
    
    Users.findOne({ email }, (err, data) => {
        if (err) return res.send({ error: 'Erro ao buscar usuário.' });
        if (data) return res.send({ error: 'Usuário já cadastrado' });
        
        // Users.create({email: email, password: password}, (err, data) => {});
        Users.create(req.body, (err, data) => {
            if (err) return res.send({ error: 'Erro ao criar usuário.' });
            
            data.password = undefined;
            return res.send(data);
        });
    });
});

router.post('/auth', (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) return res.send({ error: 'Dados Insuficientes.' });

    Users.findOne({ email }, (err, data) => {
        if (err) return res.send({ error: 'Erro ao buscar usuário.' });
        if (!data) return res.send({ error: 'Usuário não registrado.' });

        bcrypt.compare(password, data.password, (err, same) => {
            if (!same) return res.send({ error: 'Erro ao autenticar usuário.' });

            data.password = undefined;
            return res.send(data);
        });
    }).select('+password');
})

module.exports = router;