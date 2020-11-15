import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuyerDialogData } from '../listings/listings.component';
import { Buyer } from '../models/buyers';
@Component({
  selector: 'app-buyer-view-dialog',
  templateUrl: './buyer-view-dialog.component.html',
  styleUrls: ['./buyer-view-dialog.component.css']
})
export class BuyerViewDialogComponent {

  boolShow: boolean = false;
  showContactInfo: Promise<boolean> = Promise.resolve(this.boolShow);

  constructor(@Inject(MAT_DIALOG_DATA) public data: BuyerDialogData) { }

  revealContactInfo() {
    this.boolShow = !this.boolShow;
    this.showContactInfo = Promise.resolve(this.boolShow);
    // console.log(this.data);
  }

}
