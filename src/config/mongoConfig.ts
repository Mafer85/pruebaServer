import mongoose from 'mongoose';

const mongoURI = "mongodb+srv://mendoza1124mf:9zcFvdpsrRkKxVuC@cluster0.0ot8v.mongodb.net/logs?retryWrites=true&w=majority&appName=Cluster0";
//'mongodb://127.0.0.1:27017/logs'; // Cambia esto a tu URI de MongoDB

const connectMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
    });
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error en la conexión a MongoDB:', error);
  }
};

export default connectMongo;

