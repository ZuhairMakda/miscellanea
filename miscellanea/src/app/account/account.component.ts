import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  username: string = "";
  password: string = "";

  // correctUsername: string = "robin";
  // correctPassword: string = "userInterfaces4HC3"

  hide: boolean = true;

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  tooltipPosition = this.positionOptions[4];

  constructor(private _snackBar: MatSnackBar,
    public dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public myGroup: FormGroup = new FormGroup({
    username: new FormControl({ value: this.username }, [Validators.required]),
    password: new FormControl({ value: this.password }, [Validators.required])
  });

  public hasError = (controlName: string, errorName: string) => {
    return this.myGroup.controls[controlName].hasError(errorName);
  }

  goToDeals() {
    this.router.navigate(['/deals']);
  }

  goToPost() {
    this.router.navigate(['/post']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  authenticate() {
    console.log(this.username);
    console.log(this.password);
    this.dataService.loggedIn = Promise.resolve(false);
    if (this.username == "" || this.password == "" ) {
      this.openSnackBar("Please do not leave any entries empty", "Try Again");
    } else {
      this.dataService.loggedInAs = this.username;
      this.dataService.loggedIn = Promise.resolve(true);
  
      this.username = "";
      this.password = "";
    }
    
  }


}
