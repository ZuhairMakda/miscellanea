import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})

export class PageNotFoundComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  tooltipPosition = this.positionOptions[4];

  constructor(private _snackBar: MatSnackBar,
    public dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
  }

  goToDeals() {
    this.router.navigate(['/deals']);
  }

  goToPost() {
    this.router.navigate(['/post']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
