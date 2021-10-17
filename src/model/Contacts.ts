export interface Data {
  results: Results;
}

export interface Results {
  results: Contact[];
}

export interface Contact {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  dob: DOB;
  phone: string;
  cell: string;
  picture: Picture;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  postcode: string;
}
export interface DOB {
  date: string;
  age: number;
}
export interface Street {
  name: string;
  number: number;
}
export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
