import * as mongoose from 'mongoose';
export const musicSchema = new mongoose.Schema({
  name: String,
  download_url: String,
  duration: String,
});
