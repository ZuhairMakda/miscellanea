import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListingDialogData } from '../listings/listings.component';

export interface image {
  image: string;
  thumbImage: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-listing-view-dialog',
  templateUrl: './listing-view-dialog.component.html',
  styleUrls: ['./listing-view-dialog.component.css']
})
export class ListingViewDialogComponent {

  boolShow: boolean = false;
  showContactInfo: Promise<boolean> = Promise.resolve(this.boolShow);

  imageObject: any[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: ListingDialogData) { 

    
    for (let i of data.item.imageLinks) {
      let iob: image = {
        image: i,
        thumbImage: i,
        alt: "Image of Item",
        title: data.item.name
      };
      this.imageObject.push(iob);
    }

  }

  revealContactInfo() {
    this.boolShow = !this.boolShow;
    this.showContactInfo = Promise.resolve(this.boolShow);
    // console.log(this.data);
  }

}
