import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TooltipPosition } from '@angular/material/tooltip';

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

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getTime();
    this.searching = Promise.resolve(false);
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
    search: new FormControl({ value: this.searchCriteria })
  });
  public hasError = (controlName: string, errorName: string) => {
    return this.myGroup.controls[controlName].hasError(errorName);
  }

  search() {
    this.searching = Promise.resolve(true);
    this.openSnackBar("Searching", "Close");
    setTimeout(() => {
      // this.router.navigate(['/project', this.update.chosenProjectNumber]);
      console.log(this.searchCriteria);
      this.searching = Promise.resolve(false);
    }, 2000);
    
  }

  addListing() {
    console.log("add listing");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
