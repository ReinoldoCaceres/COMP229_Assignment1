let mongoose = require("mongoose");
let crypto = require('crypto');

let userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      match: [/.+\@.+\..+/, "Please fill a valid e-mail address"],
    },
    username: {
      type: String,
      unique: true,
      required: "Username is required",
      trim: true,
    },
    password: {
      type: String,
      validate: [
        (password) => {
          return password && password.length > 6;
        },
        "Password should be longer",
      ],
    },
    salt: String,
    created: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users",
  }
);

userSchema
  .virtual("fullName")
  .get(() => {
    return this.firstName + " " + this.lastName;
  })
  .set(() => {
    let splitName = fullName.split(" ");
    this.firstName = splitName[0] || "";
    this.lastName = splitName[1] || "";
  });

//Middleware pre
userSchema.pre('save', function(next) {
    if (this.password) {
       this.salt =
          Buffer.from(crypto.randomBytes(16).toString('base64'), 'base64');
       this.password = this.hashPassword(this.password);
    }
    next();
 });

//Middleware post
userSchema.post('save', function(next){
    console.log('the user ' + this.username + " details were saved");
});

userSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000,
       64, 'sha512').toString('base64');
 };

userSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password); 
}

module.exports = mongoose.model("user", userSchema);
