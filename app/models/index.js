// module.exports = {
//   Post: require("./post")
// };
module.exports = {
    User: require("./user.model"),
    Role: require("./role.model"),
    Post: require("./post"),
    // Book: require("./book"),
    ROLES: ["user", "admin", "moderator"]
}