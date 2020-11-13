import { Injectable } from '@angular/core';
import { Contact, Listing } from '../models/listing';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sharedVariable: string = "shared";

  baseListings: Listing[] = [
    {
      imageLinks: [],
      name: "John Stewart Calculus",
      price: '$68',
      contact: {
        username: "James Stewart",
        phoneNum: "(416)-375-5722",
      },
      condition: "Like New",
      description: "John Stewart's Calculus series is the top-seller in the world because of its problem-solving focus, mathematical precision and accuracy, and outstanding examples and problem sets. Selected and mentored by Stewart, Daniel Clegg and Saleem Watson continue his legacy of providing students with the strongest foundation for a STEM future. Selling Lightly used textbook required for course MATH-1Z03 (10th Gen). Available to meet at Student Center. Contact for timings.",
    },
    {
      imageLinks: [],
      name: "Statistics for Beginners",
      price: '$47',
      contact: {
        username: "Vivian Banks",
        phoneNum: "(905)-344-6496",
      },
      condition: "Lightly Used",
      description: "Selling Elementary Statistics by Meyer (6th edition; 2017). For McMaster course 3Y03. Like new condition - no writing or highlighting.",
    },
    {
      imageLinks: [],
      name: "Introduction to Probability and Statistics",
      price: '$90',
      contact: {
        username: "Ryan Gosling",
        phoneNum: "(647)-481-3377",
      },
      condition: "New",
      description: "Selling intro to Probability and Statistics (9th Gen). Condition is New. Price is Negotiable",
    },
    {
      imageLinks: [],
      name: "John Stewart Calculus",
      price: '$74',
      contact: {
        username: "Olivia Wilde",
        phoneNum: "(289)-997-8581",
      },
      condition: "Like New",
      description: "Selling John Stewart Calculus (11th Gen). For McMaster course Math 1ZA3. Like new condition - no writing or highlighting.",
    },
];

  constructor() { }

  addToListings(newListing: Listing) {
    this.baseListings.push(newListing);
  }
}
