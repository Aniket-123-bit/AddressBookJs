class AddressBook {
  //property
  firstName;
  lastName;
  address;
  city;
  state;
  zip;
  phoneNumber;
  email;

  //constructor
  constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
  }

  //setter and getter method
  set firstName(firstName) {
    this.firstName = firstName;
  }

  get firstName() {
    return this.firstName;
  }

  set lastName(lastName) {
    this.lastName = lastName;
  }

  get lastName() {
    return this.lastName;
  }

  set address(address) {
    this.address = address;
  }

  get address() {
    return this.address;
  }

  set city(city) {
    this.city = city;
  }

  get city() {
    return this.city;
  }

  set state(state) {
    this.state = state;
  }

  get state() {
    return this.state;
  }

  set zip(zip) {
    this.zip = zip;
  }

  get zip() {
    return this.zip;
  }

  set phoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  get phoneNumber() {
    return this.phoneNumber;
  }

  set email(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  //method
  toString() {
    return (
      "firstName = " +
      this.firstName +
      ", lastName = " +
      this.lastName +
      ", address = " +
      this.address +
      ", city = " +
      this.city +
      ", state = " +
      this.state +
      ", zip = " +
      this.zip +
      ", phoneNumber = " +
      this.phoneNumber +
      ", email = " +
      this.email
    );
  }
}

/////////////////////
try {
  let ContactsArray = new Array();
  ContactsArray.push(
    new AddressBook(
      "Aniket",
      "Raikwar",
      "Chhatarpur",
      "Bhopal",
      "MP",
      471201,
      6780956578,
      "anny@gmail.com"
    )
  );
  ContactsArray.push(
    new AddressBook(
      "Sneha",
      "Raikwar",
      "mp nagar",
      "jhashi",
      "UP",
      678999,
      890978000,
      "sneha@gmail.com"
    )
  );
  ContactsArray.push(
    new AddressBook(
      "Amir",
      "Khan",
      "9988778899",
      "Pune",
      "MH",
      "411033",
      "amir121123@gmail.com"
    )
  );

  /*
    //Search By City
    console.log(
      "\n------------Search To get Contact by City Bhopal---------------------"
    );
    function ContactByCity(contact_book) {
      if (contact_book.city == "Bhopal") console.log(contact_book.toString());
    }
    ContactsArray.filter(ContactByCity);
  
    //Search By State
    console.log("----------------Search Contact By State UP----------------");
    let statecontact = ContactsArray.filter((contact_book) =>
      contact_book.state.includes("UP")
    );
    console.log(statecontact.toString());
  } catch (e) {
    console.log(e);
  }
  */

  // Ability to View Person by City or State
  function StateMap(Details) {
    return (
      Details.state + "    " + Details.firstName + "      " + Details.lastName
    );
  }
  let addressStateMap = ContactsArray.map(StateMap);
  console.log(addressStateMap);
} catch (e) {
  console.log(e);
}
