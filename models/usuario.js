import conexao from '../config/conexao.js'

const Usuario = conexao.Schema({
     nome: 'String',
     email: 'String',
     senha: 'String',

     foto: 'String',
     endereco: 'String',
     telefone: 'String',
     cpf: 'String',
     admin: 'Boolean',

})
 
export default conexao.model('Usuario',Usuario)