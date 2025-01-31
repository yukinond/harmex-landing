import mongoose from "mongoose";
import { uuid } from 'uuidv4';

const ContentSchema = new mongoose.Schema({
  text: String,
  class: String,
});

const SectionSchema = new mongoose.Schema({
  subheading: String,
  content: [ContentSchema],
  class: String,
});

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
  article: [SectionSchema],
  author: { type: String, required: true },
  date: { type: String, required: true },
  category: { type: String, required: true },
  views: { type: Number, default: 0 },
  uuid: { type: String, default: () => uuid() },
  readTime: { type: String, default: '10 минут' },
}, { timestamps: true });

export const Article = mongoose.model('Article', ArticleSchema);
