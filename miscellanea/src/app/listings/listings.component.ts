import { Component, Input, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { Listing } from '../models/listing';
import { DataService } from '../services/data-service.service';
import { Buyer } from '../models/buyers';
import { MatDialog } from '@angular/material/dialog';
import { ListingViewDialogComponent } from '../listing-view-dialog/listing-view-dialog.component';
import { BuyerViewDialogComponent } from '../buyer-view-dialog/buyer-view-dialog.component';

export interface ListingDialogData {
  item: Listing
}

export interface BuyerDialogData {
  buyer: Buyer
}

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  tooltipPosition = this.positionOptions[3];

  conditionFilter: string = "";
  requestTypeFilter: string = "sell";


  sortMethods: string[] = ["Lowest Price", "Highest Price", "Newest", "Oldest"];
  chosenSort: string = this.sortMethods[0];

  price: number[] = [0, 500]; //[min, max]

  listOfTextbooks: Listing[] = this.dataService.baseListings; 
  listOfTextbookBuyers: Buyer[] = this.dataService.mathBuyers;
  listOfCalculators: Listing[] = this.dataService.calculatorSellers;
  listOfCalculatorBuyers: Buyer[] = this.dataService.baseBuyers;

  listToShow: any[] = [this.listOfTextbooks, this.listOfTextbookBuyers, this.listOfCalculators, this.listOfCalculatorBuyers]; //[math textbook items, textbook buyers, calculator items, calculator buyers]
  indexToShow: number = 0;

  lookingForBuyers: Promise<boolean>;

  showData: Promise<boolean>;

  filterResult0: Promise<boolean>;

  constructor(
    public dataService: DataService,
    private router: Router,
    public listingDialog: MatDialog,
    public buyerDialog: MatDialog
  ) { }

  ngOnInit(): void {

    if (this.dataService.searchCriteria === "") {
      this.router.navigate(['/']);
    } else {

      this.showData = Promise.resolve(false);

      if (!this.dataService.searchCriteria.toLowerCase().trim().includes("math textbook") && !this.dataService.searchCriteria.toLowerCase().trim().includes("calculator")) {
        //Not found Item
        console.log("Query Not found");
        this.showData = Promise.resolve(false);

      } else {
        if (this.dataService.searchCriteria.toLowerCase().trim().includes("math textbook")) {
          //looking at items being sold
          this.indexToShow = 0;
          this.lookingForBuyers = Promise.resolve(false);
        } else {
          //looking at ppl who want to buy a calculator
          this.indexToShow = 2;
          this.lookingForBuyers = Promise.resolve(false);
        }

        this.showData = Promise.resolve(true);
      }


    }

  }

  goToDeals() {
    this.router.navigate(['/deals']);
  }

  goToPost() {
    this.router.navigate(['/post']);
  }

  goHome() {
    this.router.navigate(['/']);
  }

  applyFilters() {
    this.showData = Promise.resolve(false);

    if (this.requestTypeFilter.toLowerCase().trim().includes("buy") && this.indexToShow === 0) {
      this.indexToShow = 1;
      this.lookingForBuyers = Promise.resolve(true);
    } else if (this.requestTypeFilter.toLowerCase().trim().includes("sell") && this.indexToShow === 1) {
      this.indexToShow = 0;
      this.lookingForBuyers = Promise.resolve(false);
    } else if (this.requestTypeFilter.toLowerCase().trim().includes("buy") && this.indexToShow === 2) {
      this.indexToShow = 3;
      this.lookingForBuyers = Promise.resolve(true);
    } else if (this.requestTypeFilter.toLowerCase().trim().includes("sell") && this.indexToShow === 3) {
      this.indexToShow = 2;
      this.lookingForBuyers = Promise.resolve(false);
    }
    //condition filter if includes new or used

    if (this.indexToShow === 0) { //math textbooks
      this.listToShow[0] = this.dataService.baseListings.filter((textbook) => textbook.condition.trim().toLowerCase().includes(this.conditionFilter.toLowerCase().trim()));
    } else if (this.indexToShow === 1) { //textbook buyers
      this.listToShow[1] = this.dataService.mathBuyers.filter((textbook) => textbook.condition.trim().toLowerCase().includes(this.conditionFilter.toLowerCase().trim()));
    } else if (this.indexToShow === 2) { //calculators
      this.listToShow[2] = this.dataService.calculatorSellers.filter( (textbook) => textbook.condition.trim().toLowerCase().includes( this.conditionFilter.toLowerCase().trim() ) );
    } else { //calculator buyers
      this.listToShow[3] = this.dataService.baseBuyers.filter((textbook) => textbook.condition.trim().toLowerCase().includes(this.conditionFilter.toLowerCase().trim()));
    }
    let filteredSoFar: any[] = this.listToShow;

    //price filter if within range
    //condition filter if includes new or used

    if (this.indexToShow === 0) { //math textbooks
      this.listToShow[0] = filteredSoFar[0].filter((textbook) => textbook.price >= this.price[0] && textbook.price <= this.price[1]);
    } else if (this.indexToShow === 1) { //textbook buyers
      this.listToShow[1] = filteredSoFar[1].filter((textbook) => textbook.price >= this.price[0] && textbook.price <= this.price[1]);
    } else if (this.indexToShow === 2) { //calculators
      this.listToShow[2] = filteredSoFar[2].filter((textbook) => textbook.price >= this.price[0] && textbook.price <= this.price[1]);
    } else { //calculator buyers
      this.listToShow[3] = filteredSoFar[3].filter((textbook) => textbook.price >= this.price[0] && textbook.price <= this.price[1]);
    }

    let finalList: any[] = this.listToShow;

    if (finalList[this.indexToShow].length === 0) {
      this.filterResult0 = Promise.resolve(true);
    } else {
      this.filterResult0 = Promise.resolve(false);
    }

    //apply sorting
    if (this.chosenSort === this.sortMethods[0]) { //lowest price
      this.listToShow[this.indexToShow] = finalList[this.indexToShow].sort((a,b) => (a.price < b.price) ? -1 : 1);
    } else if (this.chosenSort === this.sortMethods[1]) { //highest price
      this.listToShow[this.indexToShow] = finalList[this.indexToShow].sort((a,b) => (a.price > b.price) ? -1 : 1);
    } else if (this.chosenSort === this.sortMethods[2]) { //newest 
      this.listToShow[this.indexToShow] = finalList[this.indexToShow].sort((a,b) => (a.postDate < b.postDate) ? -1 : 1);
    } else if (this.chosenSort === this.sortMethods[3]) { //oldest
      this.listToShow[this.indexToShow] = finalList[this.indexToShow].sort((a,b) => (a.postDate > b.postDate) ? -1 : 1);
    }
    

    this.showData = Promise.resolve(true);
  }

  openListing(item) {
    // console.log(item.name);

    if (this.indexToShow === 1 || this.indexToShow === 3) {
      this.buyerDialog.open(BuyerViewDialogComponent, {
        data: {
          buyer: item
        },
        autoFocus: false
      });
    } else {
      this.listingDialog.open(ListingViewDialogComponent, {
        data: {
          item: item
        },
        autoFocus: false,
      });
    }


  }

  login() {
    this.router.navigate(['/login']);
  }


  }


