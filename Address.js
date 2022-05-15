console.log("Welcome to Address Book");
let users = [
    [
      'Amir',
      'Khan',
      '9988778899',
      'Pune',
      'MH',
      '411033',
      'amir121123@gmail.com',
    ],
    [
        'Aniket',
        'Raikwar',
        '988877078',
        'Bhopal',
        'MP',
        '471201',
        'aniket@gmail.com',
      ],
      [
        'Sneha',
        'Raikwar',
        '988889008',
        'Jhashi',
        'UP',
        '471001',
        'sneha@gmail.com',
      ],
      [
        'Sneha',
        'Raikwar',
        '988889008',
        'Jhashi',
        'UP',
        '471001',
        'sneha@gmail.com',
      ],





];






//uc1
class AddressbookMain{
    constructor(firstName,lastName,phoneNumber,city,state,zip,email){
        this.id=Math.random().toString(16).slice(2);
        this.firstName=firstName;
        this.lastName=lastName;
        this.phoneNumber=phoneNumber;
        this.email=email;
        this.address={
            city,
            state,
            zip
        };
       
    }
}
//uc2
const deatails = users.map((users)=>{
    return new AddressbookMain(...users);
});
console.log(deatails);
//uc3
console.log('----uc3-----');
const updatedDetails = deatails.map((user)=>{
    if(user.firstName === 'Aniket'){
        return{
            ...user,
            lastName:'Singh',
        };
    }
    return user;
});
console.log(updatedDetails);

//uc4
console.log('---deleted user---');
const finalArr = updatedDetails.filter((user)=> user.firstName !== 'Aniket' && user.firstName !== 'Amir'
);
console.log("Dleted Data");
console.log(finalArr);
//uc5 reduce
console.log('---reduce contacts----');
//Reduce function to find total of contacts in Address Book
var ContactsPresenceTotal = 0;
function findTotalContacts(users) {
  if (users != null) ContactsPresenceTotal++;
  return ContactsPresenceTotal;
}
users.reduce(findTotalContacts, 1);
console.log(
  "Total Contacts Present in the AddressBookMaster array: " +
    ContactsPresenceTotal
);

//uc 6

// check for duplicate Person details
console.log("Duplicate value check uc7");
let CountDuplicate = 1;
function CheckDuplicatesCount(users) {
  if (users.firstName == "Sneha") CountDuplicate++;
  return CountDuplicate;
}

//using foreach checking the count for each contact
users.forEach((users) => CheckDuplicatesCount(users));
if (CountDuplicate == 1) console.log("It is Duplicate Entry");
else console.log("It is not Duplicate Entry");

console.log("SearchPersonCityOrState uc8");

   



