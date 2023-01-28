const { Schema, model } = require("mongoose");

const Test = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  content: {
    type: Array,
    required: true
  }
  // tags: {
  //   type: Array,
  // }

},
  { timestamps: true },
);

module.exports = Test = model("test", Test);
