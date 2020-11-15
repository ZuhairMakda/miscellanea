import { Injectable } from '@angular/core';
import { Listing } from '../models/listing';
import { Buyer } from '../models/buyers';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchCriteria: string = "";

  baseListings: Listing[] = [ //base sort is lowest price first
    {
      imageLinks: ['../../assets/textbooks/stats_begin.png'],
      name: "Statistics for Beginners",
      price: 47,
      contact: {
        username: "Vivian Banks",
        phoneNum: "(905)-344-6496",
      },
      condition: "Lightly Used",
      description: "Selling Elementary Statistics by Meyer (6th edition; 2017). For McMaster course 3Y03. Like new condition - no writing or highlighting.",
      postDate: new Date("08/23/2020"),
      city: "Hamilton",
      province: "ON"
    },
    {
      imageLinks: ['../../assets/textbooks/jscalc.jpg', '../../assets/textbooks/jscalc_used.jpeg', '../../assets/textbooks/jscalc3.jpg'],
      name: "John Stewart Calculus",
      price: 68,
      contact: {
        username: "James Stewart",
        phoneNum: "(416)-375-5722",
      },
      condition: "Like New",
      description: "John Stewart's Calculus series is the top-seller in the world because of its problem-solving focus, mathematical precision and accuracy, and outstanding examples and problem sets. Selected and mentored by Stewart, Daniel Clegg and Saleem Watson continue his legacy of providing students with the strongest foundation for a STEM future. Selling Lightly used textbook required for course MATH-1Z03 (10th Gen). Available to meet at Student Center. Contact for timings.",
      postDate: new Date("08/26/2020"),
      city: "Burlington",
      province: "ON"
    },
    {
      imageLinks: ['../../assets/textbooks/jscalc_used.jpeg', '../../assets/textbooks/jscalc.jpg', '../../assets/textbooks/jscalc2.jpeg'],
      name: "John Stewart Calculus",
      price: 74,
      contact: {
        username: "Olivia Wilde",
        phoneNum: "(289)-997-8581",
      },
      condition: "Like New",
      description: "Selling John Stewart Calculus (11th Gen). For McMaster course Math 1ZA3. Like new condition - no writing or highlighting.",
      postDate: new Date("10/11/2020"),
      city: "Brampton",
      province: "ON"
    },
    {
      imageLinks: ['../../assets/textbooks/introProbStat.jpg', '../../assets/textbooks/ips_2.jpg', '../../assets/textbooks/ips_3.jpg'],
      name: "Introduction to Probability and Statistics",
      price: 90,
      contact: {
        username: "Ryan Gosling",
        phoneNum: "(647)-481-3377",
      },
      condition: "New",
      description: "Selling intro to Probability and Statistics (3rd Gen). Condition is New. Price is Negotiable",
      postDate: new Date("09/13/2020"),
      city: "Oakville",
      province: "ON"
    },
];

mathBuyers: Buyer[] = [ //base sort is lowest price first
  {
    name: "Micro Econ",
    price: 20,
    contact: {
      username: "Tom Hanks",
      phoneNum: "(647)-217-6789",
    },
    condition: "Like New",
    description: "Looking For Hannah Holmes Micro Econ Textbook. Need by December 10th to study for exam.",
    postDate: new Date("10/07/2020"),
    city: "Oakville",
    province: "ON"
  },
  {
    name: "Calculus Textbook",
    price: 70,
    contact: {
      username: "Benedict Cumberbatch",
      phoneNum: "(647)-113-2244",
    },
    condition: "Used",
    description: "Looking For John Stewart Calculus 11th Gen for Math 1ZA3/1ZB3. Need ASAP",
    postDate: new Date("10/13/2020"),
    city: "Hamilton",
    province: "ON"
  },
];

baseBuyers: Buyer[] = [ //base sort is lowest price first
  {
    name: "Casio Fx-991ms",
    price: 10,
    contact: {
      username: "Hugh Jackman",
      phoneNum: "(426)-223-7338",
    },
    condition: "Used",
    description: "Looking to purchase Casio Fx-991ms for around $10. Single Line calculator necessary for McMaster Midterms. Need ASAP.",
    postDate: new Date("10/03/2020"),
    city: "Hamilton",
    province: "ON"
  },
  {
    name: "Casio Fx-991ES+",
    price: 20,
    contact: {
      username: "Wade Wilson",
      phoneNum: "(647)-227-1234",
    },
    condition: "Like New",
    description: "Looking to purchase Casio Fx-991ES+ double line calculator for around $20.",
    postDate: new Date("10/07/2020"),
    city: "Oakville",
    province: "ON"
  },
  {
    name: "Sharp-12 Digit Printing Calculator",
    price: 90,
    contact: {
      username: "Bruce Wayne",
      phoneNum: "(647)-164-2274",
    },
    condition: "Used",
    description: "Accounting class needs me to use a printing calculator so I guess I'm here looking for one. Message me if you got one. PS I'm Batman, why am I even taking accounting class",
    postDate: new Date("10/10/2020"),
    city: "Toronto",
    province: "ON"
  },
  {
    name: "Texas Instrument TI-84+",
    price: 150,
    contact: {
      username: "Natasha Romanoff",
      phoneNum: "(289)-609-5377",
    },
    condition: "Lightly Used",
    description: "I need a Texas Instrument Graphing Calculator Ideally Model 84+. If you have another type message me and we can discuss potential deal. ",
    postDate: new Date("09/13/2020"),
    city: "Burlington",
    province: "ON"
  },
];

calculatorSellers: Listing[] = [ //base sort is lowest price first
  {
    imageLinks: ['../../assets/calculators/991ms.jpg', '../../assets/calculators/991ms_2.jpeg', '../../assets/calculators/991ms_3.jpg'],
    name: "Casio Fx-991ms",
    price: 12,
    contact: {
      username: "Rick Sanchez Earth Dimension C-137",
      phoneNum: "(416)-000-0000",
    },
    condition: "Lightly Used",
    description: "Yah that's write I'm the first one to have the 416 area code. But anyways, I'm selling this old Casio 991ms, ping me if you want it. Price NON-Negotiable",
    postDate: new Date("08/23/2020"),
    city: "Mississauga",
    province: "ON"
  },
  {
    imageLinks: ['../../assets/calculators/84plus.jpg', '../../assets/calculators/84plus_3.jpg'],
    name: "Texas Instruments Ti-84+",
    price: 175,
    contact: {
      username: "Morty Smith",
      phoneNum: "(416)-999-9999",
    },
    condition: "New",
    description: "Found this Brand New Texas Instruments Ti 84+ Graphing Calculator in my grandpa's garage. Please don't tell him. You can have it for $175. I'm trying to save up for PS5 so please don't scam me",
    postDate: new Date("08/27/2020"),
    city: "Mississauga",
    province: "ON"
  },
];

loggedInAs: string = "";
loggedIn: Promise<boolean> = Promise.resolve(false);

  constructor() { }

  addToListings(newListing: Listing) {
    this.baseListings.push(newListing);
  }

}
