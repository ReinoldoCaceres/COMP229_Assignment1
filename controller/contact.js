//create a new Contact Model

let contactSchema = require("../models/contact");

module.exports.contactList = function (req, res, next) {
  contactSchema
    .find((err, contactList) => {
      if (err) {
        console.error(err);
      } else {
        res.render("contact/list", {
          title: "Contact List",
          ContactList: contactList,
          userName:req.user ? req.user.username : ''
        });
      }
    })
    .sort({ name: "asc" });
  //where 'asc' orders the documents in ascending order alphabetically
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;
  contactSchema.findById(id, (err, contactToEdit) => {
    if (err) {
      console.error(err);
      res.render(err);
    } else {
      res.render("contact/add_edit", {
        title: "Edit List",
        contact: contactToEdit,
        userName:req.user ? req.user.username : ''

      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  let updatedItem = contactSchema({
    _id: req.params.id,
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
  });

  contactSchema.updateOne({ _id: id }, updatedItem, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/contact/list");
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  contactSchema.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      res.redirect("/contact/list");
    }
  });
};

module.exports.displayAddPage = (req, res, next) => {
  let newContact = contactSchema();

  res.render("contact/add_edit", {
    title: "Add a new Contact",
    contact: newContact,
    userName:req.user ? req.user.username : ''
  });
};

module.exports.processAddPage = (req, res, next) => {
  let newContact = contactSchema({
    _id: req.params.id,
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
  });

  contactSchema.create(newContact, (err, item) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      console.log(item);
      res.redirect("/contact/list");
    }
  });
};
