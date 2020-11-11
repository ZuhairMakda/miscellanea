export interface Listing {
    imageLinks: string[];
    name: string;
    price: string;
    contact: Contact;
}

export interface Contact {
    username: string;
    phoneNum: string;
    email: string;
}