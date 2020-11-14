import {Contact} from './listing';

export interface Buyer {
    name: string;
    price: number;
    contact: Contact;
    condition: string;
    description: string;
    postDate: Date;
    city: string;
    province: string;
}