const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    firstName: {type: String, required: "First Name is Required"},
    lastName: {type: String, required: "Last Name is Required"},
    zipCode: String,
    username: {type: String, required: "Username is Required", unique: true},
    email: {type: String, required: "Please enter a valid e-mail address", unique: true},
    password: {type: String, required: "Password is Required"},
    userCreated: {type: Date, default: Date.now},
    lastUpdated: {type: Date},
    fullName: {type: String},
    roles: [{type: Schema.Types.ObjectId, ref: "Role"}],
    books: [{type: Schema.Types.ObjectId, ref: "Book"}],
    posts: [{type: Schema.Types.ObjectId, ref: "Post"}],
    notes: [{type: Schema.Types.ObjectId, ref: "Note"}],
    workouts: [{type: Schema.Types.ObjectId, ref: "Workout"}],
    images: [{type: Schema.Types.ObjectId, ref: "Image"}],
    recipes: [{type: Schema.Types.ObjectId, ref: "Recipe"}],
    transactions: [{type: Schema.Types.ObjectId, ref: "Transaction"}],

});

// setFullName: sets the current user's `fullName` property to their lastName appended to their `firstName`
UserSchema.methods.setFullName = function () {
    this.fullName = `${this.firstName}' ' ${this.lastName}`;
};
// lastUpdatedDate: sets the current user's `lastUpdated` property to Date.now()
UserSchema.methods.lastUpdatedDate = function () {
    this.lastUpdated = Date.now();
};

const User = mongoose.model("User", UserSchema)

module.exports = User;