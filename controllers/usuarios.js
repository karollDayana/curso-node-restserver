const {response, request} = require('express');

const usuariosGet = (req=request, res=response) => {
    const {q, nombre='no name', apikey} = req.query;

    res.json({
        ok: true,
        q,
        nombre,
        apikey,
        msg: 'get API - controlador'
    });
}

const usuariosPut = (req, res=response) => {
    const {id} = req.params;

    res.json({
        ok: true,
        id,
        msg: 'put API - controlador'
    });
}

const usuariosPost = (req, res=response) => {
    const {nombre, edad} = req.body;
    res.json({
        ok: true,
        nombre,
        edad,
        msg: 'post API - controlador'
    });
}

const usuariosDelete = (req, res=response) => {
    res.json({
        ok: true,
        msg: 'delete API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}