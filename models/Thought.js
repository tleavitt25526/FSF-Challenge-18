const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const format_date = require("../utils/helpers");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.NOW,
    get: format_date,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
