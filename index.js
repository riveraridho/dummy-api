const {faker} = require("@faker-js/faker");
let database = { users: []};

for (let i = 1; i<= 30; i++) {
  database.users.push({
    id: i,
    name: faker.name.findName(),
    address: faker.address.streetAddress(true),
    city: faker.address.cityName(),
    zipcode: faker.address.zipCode('#####'),
    telfon_number: faker.phone.phoneNumber('+62 8## ### ### ##'),
  });
}

console.log(JSON.stringify(database));
