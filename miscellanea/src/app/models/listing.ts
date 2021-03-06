export interface Listing {
    imageLinks: string[];
    name: string;
    price: number;
    contact: Contact;
    condition: string;
    description: string;
    postDate: Date;
    city: string;
    province: string;
}

export interface Contact {
    username: string;
    phoneNum: string;
}