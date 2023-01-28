const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [{type: String, ref: 'Role'}]
},
  { timestamps: true },
);

module.exports = mongoose.model("user", UserSchema);
