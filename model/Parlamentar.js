import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ParlamentarSchema = new Schema({
  nomeParlamentar: {
    type: String,
    required: true
  },

  siglaUf: {
    type: String,
    required: true
  },

  foto: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  siglaPartido: {
    type: String,
    required: true
  },

  status: {
    type: String,
    required: true
  },

  despesas: [
    {
      type: Schema.Types.ObjectId,
      ref: 'despesa'
    }
  ]
});

export default mongoose.model('parlamentar', ParlamentarSchema);
