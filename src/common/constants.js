export const JSON_URL = 'http://www.mocky.io/v2/5d565297300000680030a986';
export const NO_AVATAR = 'https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png';

export const Company = {
  name: "Company",
  properties: {
    name: "string?",
    catchPhrase: "string?",
    bs: "string?",
    combiner: {type: 'linkingObjects', objectType: 'Employee', property: 'company'}
  }
}

export const Geo = {
  name: "Geo",
  properties: {
    lat: "string?",
    lng: "string?",
    combiner: {type: 'linkingObjects', objectType: 'Address', property: 'geo'}
  }
}

export const Address = {
  name: "Address",
  properties: {
    street: "string?",
    suite: "string?",
    city: "string?",
    zipcode: "string?",
    geo: "Geo?",
    combiner: {type: 'linkingObjects', objectType: 'Employee', property: 'address'}
  }
}

export const EmployeeSchema = {
  name: "Employee",
  properties: {
    id: "int",
    name: "string",
    username: "string",
    email: "string",
    profile_image: "string?",
    address: "Address?",
    phone: "string?",
    website: "string?",
    company: "Company?"
  },
  primaryKey: "id",
};