import mongoose, { mongo } from 'mongoose';
const Schema = mongoose.Schema;

const DespesaSchema = new Schema({
  fornecedor: {
    type: String,
    required: true
  },

  descricao: {
    type: String,
    required: true
  },

  mes: {
    type: Number,
    required: true
  },

  ano: {
    type: Number,
    required: true
  },

  valor: {
    type: Number,
    required: true
  },

  parlamentar: {
    type: Schema.Types.ObjectId,
    ref: 'parlamentar'
  }
});

export default mongoose.model('despesa', DespesaSchema);
