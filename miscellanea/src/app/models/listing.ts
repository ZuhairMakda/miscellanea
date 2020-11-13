export interface Listing {
    imageLinks: string[];
    name: string;
    price: string;
    contact: Contact;
    condition: string;
    description: string;
}

export interface Contact {
    username: string;
    phoneNum: string;
}