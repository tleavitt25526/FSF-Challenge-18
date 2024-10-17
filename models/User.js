const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Invalid email address format",
      },
    },
    thoughts: [thoughtSchema],
    friends: [this],
  },
  {
    virtuals: {
      friendCount: {
        get() {
          return friends.length;
        },
      },
    },
  }
);

const User = model("user", userSchema);

module.exports = User;
