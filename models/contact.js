let mongoose = require('mongoose');

let contactSchema = new mongoose.Schema (
    {
        name: String,
        number: String,
        email: String
    },
    {
        collection: "contacts"
    }
);

module.exports = mongoose.model("Contact", contactSchema);