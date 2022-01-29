// character.model.js
var mongoose = require("mongoose");
// Setup schema
var characterSchema = mongoose.Schema({

});
// Export User model
var Character = (module.exports = mongoose.model("character", characterSchema));
module.exports.get = function (callback, limit) {
  Character.find(callback).limit(limit);
};
