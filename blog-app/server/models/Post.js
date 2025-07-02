import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  image: String,
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.model('Post', postSchema);
