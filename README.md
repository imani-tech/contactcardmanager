# JavaScript Challenge: Contact Card Manager

Build a small **Contact Card Manager** using HTML, CSS and vanilla JavaScript.

The app should let a user add contacts to a list and display each contact as a card on the page.

## Task

Complete the JavaScript inside `script.js`.

The HTML and CSS have already been created for you. You can improve the styling if you want, but the main focus should be the JavaScript logic.

---

## Requirements

A user should be able to:

1. Enter a contact name
2. Enter an email address
3. Enter a phone number
4. Choose a contact type
5. Click a button to add the contact
6. Display the contact as a card on the page
7. Delete a contact
8. Show a simple error message if the form is not filled in properly
9. Show the total number of contacts

---

## Contact object

Each contact should be stored as an object like this:

```js
{
  id: 1,
  name: "Sarah Jones",
  email: "sarah@example.com",
  phone: "07123456789",
  type: "Work"
}
```

All contacts should be stored inside an array.

Example:

```js
const contacts = [
  {
    id: 1,
    name: "Sarah Jones",
    email: "sarah@example.com",
    phone: "07123456789",
    type: "Work"
  }
];
```

---

## Validation rules

The app should not allow:

- Empty name
- Empty email
- Empty phone number
- Empty contact type

If something is missing, show a message like:

```txt
Please fill in all fields.
```

The form should not add a contact until the missing fields have been fixed.

---

## Card display

Each contact card should show:

```txt
Sarah Jones
Email: sarah@example.com
Phone: 07123456789
Type: Work
[Delete]
```

---

## Suggested

Try breaking the problem down like this:

1. Select the form inputs with `document.getElementById`
2. Listen for the form submit event
3. Stop the page refreshing with `event.preventDefault()`
4. Read the input values
5. Check if any values are empty
6. Create a contact object
7. Push the contact object into the contacts array
8. Render the contacts array to the page
9. Add a delete button for each contact
10. Re-render the contacts after deleting one

---

## Bonus features

Only try these after the main version works:

1. Add a search box to search contacts by name
2. Add a filter to show only Work, Friend, Family or Other contacts
3. Save the contacts using `localStorage`
4. Add an edit button
5. Improve the mobile design
6. Add better email validation, for example checking for `@`

---

## Rules

- Use vanilla JavaScript only
- Do not use React, Vue, Bootstrap or any framework
- Use objects for each contact
- Use an array to store all contacts
- Use functions to keep the code organised

---

When finished, update this README with a short section explaining:

1. How your solution works
2. What you found difficult
3. What you would improve next