import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { DataService } from '../services/data-service.service';
import { Listing } from '../models/listing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  time: string;
  userName: string;

  /**
   * Used for Display Message
   */
  today: number = Date.now();

  searchCriteria: string = "";

  searching: Promise<boolean>;

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  tooltipPosition = this.positionOptions[4];

  color = 'warn';
  mode = 'indeterminate';

  searchedFor: Listing; 

  constructor(
    private _snackBar: MatSnackBar,
    private dataService: DataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getTime();
    this.searching = Promise.resolve(false);
    this.dataService.searchCriteria = "";
  }

  getTime() {
    let current = new Date(Date.now());
    let hour = current.getHours();
    if (hour >= 4 && hour <= 12) {
      this.time = "Morning";
    } else if (hour <= 18) {
      this.time = "Afternoon";
    } else {
      this.time = "Evening";
    }
  }

  public myGroup: FormGroup = new FormGroup({
    search: new FormControl({ value: this.searchCriteria }, [Validators.required])
  });
  public hasError = (controlName: string, errorName: string) => {
    return this.myGroup.controls[controlName].hasError(errorName);
  }

  search() {
    // this.searching = Promise.resolve(true);
    // this.openSnackBar("Searching", "Close");

    if (this.searchCriteria.trim().toLowerCase() === "") {
      this.openSnackBar("Please Enter a Valid Search Criteria Before Searching", "Close");
      // this.searching = Promise.resolve(false);
    } else {
      this.dataService.searchCriteria = this.searchCriteria;
      // this.searching = Promise.resolve(false);
      this.router.navigate(['/listings']);
    }

      
    
  }

  goToDeals() {
    this.router.navigate(['/deals']);
  }

  goToPost() {
    this.router.navigate(['/post']);
  }

  goToListings() {
    this.router.navigate(['/listings']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
