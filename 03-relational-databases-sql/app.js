//Relational Databases

// When we are dealing with Tables

// TABLE OF PEOPLE
// ID | Firstname | Lastname
// 1    John         Doe

//We RELATE the tables using an ID

// TABLE OF ADDRESSES
// ID | PersonID | Address
// 100     1        555 Main St 

//or even better, we split into more tables

// TABLE OF People
// ID | Firstname | Lastname
// 1    John         Doe
// 2    Jane         Doe

// TABLE OF PersonAddresses
// PersonID | AddressID
// 1            100
// 2            100

// TABLE OF Addresses
// ID | Address
// 100  555 Main St.

// We the ID of the Address and the ID of the Person
//This is way we can begin to ASK QUESTIONS of DATABASE
//And this part of asking questions is the SQL

//SQL: Structured Query Language

// SELECT People.ID, Firstname, Lastname, 
// Address FROM People INNER JOIN PersonAddresses ON 
// People.ID = PersonAddresses.PERSONID
// INNER JOIN Addresses ON 
// PersonAddresses.AddressID = Addresses.ID

//In JS the way to handle data is the object

// We can think of this Table as an Array

// TABLE OF People
// ID | Firstname | Lastname
// 1    John         Doe
// 2    Jane         Doe

// [
//     {
//         ID: 1,
//         Firstname: 'John',
//         Lastname: 'Doe',
//         Address: '555 Main St.'
//     },
//     {
//         ID: 2,
//         Firstname: 'Jane',
//         Lastname: 'Doe',
//         Address: '555 Main St.'
//     }
// ]

//This way we can convert Data to Javascript