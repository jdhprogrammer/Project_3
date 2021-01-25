// module.exports = {
//   Post: require("./post")
// };

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.Post = require("./post")

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
