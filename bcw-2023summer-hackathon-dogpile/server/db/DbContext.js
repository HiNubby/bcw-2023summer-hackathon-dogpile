import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { DogPostSchema } from "../models/DogPost.js";
import { DogCommentSchema } from "../models/DogComment.js";
import { DogRatingSchema } from "../models/Rating.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  DogPosts = mongoose.model('DogPost', DogPostSchema);

  DogComments = mongoose.model('DogComment', DogCommentSchema);

  DogRatings = mongoose.model('DogRating', DogRatingSchema);
}

export const dbContext = new DbContext()
