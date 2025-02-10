import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid'
import { slugify } from "~/server/utils/slugify";

const ContentSchema = new mongoose.Schema({
  text: String,
  bold: [{start: Number, end: Number }], 
  italic: [{start: Number, end: Number }],
  underline: [{start: Number, end: Number }],
  class: String,
});

const SectionSchema = new mongoose.Schema({
  subheading: String,
  headingClass: String,
  content: [ContentSchema],
  class: String,
});

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
  article: [SectionSchema],
  author: { type: String, required: true },
  date: { type: Date, required: true },
  category: { type: String, required: true },
  views: { type: Number, default: 0 },
  uuid: { type: String, default: () => uuidv4() },
  slug: { type: String, unique: true, index: true },
  readTime: { type: String, default: '10 минут' },
}, { timestamps: true });

ArticleSchema.pre('validate', async function (next) {
  if (!this.slug) {
    let baseSlug = slugify(this.title);
    let uniqueSlug = baseSlug;
    let counter = 1;

    while (await mongoose.model('Article').exists({ slug: uniqueSlug })) {
      uniqueSlug = `${baseSlug}-${counter}`;
      counter++;
    }

    this.slug = uniqueSlug;
  }
  next();
});
export const Article = mongoose.model('Article', ArticleSchema);
