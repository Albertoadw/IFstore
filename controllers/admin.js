import Usuario from '../models/usuario.js';

export async function listarusuarios(req, res){
    const usuarios = await Usuario.find({});
    res.render('admin/usuarios/lst', {usuarios: usuarios});
}

export async function detalhe(req, res){
     const usuario = await Usuario.findById(req.params.id);
     res.render('admin/usuarios/detalhe', {usuario: usuario});
}    