const contacts = require('./contacts');
const { program } = require('commander');

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      // ...
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case "get":
      // ... id
      const oneContact = await contacts.getContactById(id);
      console.table(oneContact);
      break;

    case "add":
      // ... name email phone
      const newContact = await contacts.addContact({ name, email, phone });
      console.table(newContact);
      break;

    case "remove":
      // ... id
      const deleteContact = await contacts.removeContact(id);
      console.table(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
