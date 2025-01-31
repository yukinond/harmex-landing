import mongoose from "mongoose";

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
  id: { type: String, unique: true },
  title: String,
  description: String,
  image: String,
  article: [SectionSchema],
  author: String,
  date: String,
  category: String,
});

export const Article = mongoose.model('Article', ArticleSchema)
