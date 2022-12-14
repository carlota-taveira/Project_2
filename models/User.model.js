const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: false,
    },
    lastname: {
      type: String,
      required: false,
    },
    mobilenumber: {
      type: Number,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
      required: false,
    },
    imgUrl: {
      type: String,
    },
    favourites: [{type: Schema.Types.ObjectId, ref: "Article"}]
    
    
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
