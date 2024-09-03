import mongoose from 'mongoose';

const conexao = await mongoose.connect("mongodb://aluno:aluno@alberto-shard-00-00.zfrsc.mongodb.net:27017,alberto-shard-00-01.zfrsc.mongodb.net:27017,alberto-shard-00-02.zfrsc.mongodb.net:27017/?ssl=true&replicaSet=atlas-olm0ol-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Alberto")

export default conexao