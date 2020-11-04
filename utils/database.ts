import mongoose from 'mongoose';

const connect = async (): Promise<void> => {
  await mongoose
    .connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log('MongoDB successfully connected.');
    });
};

export default connect;
