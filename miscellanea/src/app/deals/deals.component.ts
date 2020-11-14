import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { DataService } from '../services/data-service.service';
 
export interface deal {
  name: string;
  link: string;
  imgLink: string;
  description: string;
 }

 
@Component({
 selector: 'app-deals',
 templateUrl: './deals.component.html',
 styleUrls: ['./deals.component.css']
})



export class DealsComponent implements OnInit {
 
 positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
 tooltipPosition = this.positionOptions[3];

 deals: deal[] = [{​​​​​
  name: "Spotify",
  imgLink: "./../assets/deals/spotify.png",
  description: "Get monthly premium access to spotify for just $4.99 CAD per month when signing up with your student ID!",
  link: "https://www.spotify.com/ca-en/student/"
  }​​​​​,
  {​​​​​
  name: "Prime Student",
  imgLink: "./../assets/deals/amazon.png",
  description: "Students can become an Amazon Prime member for just $39.00 CAD per year! Offer excludes Quebec Residents.",
  link: "https://www.amazon.ca/amazonprime?_encoding=UTF8&%2AVersion%2A=1&%2Aentries%2A=0&planOptimizationId=WLPStudentMonthlyEligiblePlans&primeCampaignId=studentWlpPrimeRedir&ref_=st_wlp_pr_redir"
  },​
  {​​​​​
  name: "Youtube Premium",
  imgLink: "./../assets/deals/youtube.png",
  description: "Get YouTube Premium for just $6.99 CAD per month. First month free, no ads, background play, download videos, and get Google Music Premium",
  link: "https://www.youtube.com/premium/student"
  },
  {​​​​​
  name: "Campus Store",
  imgLink: "./../assets/deals/mcmaster.png",
  description: "Save 25% on Marauder Crewneck Sweatshirt. Was: $42.99 CAD Now: $32.24 CAD Sale Ends: Oct. 32 2020",
  link: "https://campusstore.mcmaster.ca/"
  },
  {​​​​​
  name: "SPC",
  imgLink: "./../assets/deals/spc.png",
  description: "Access over 450+ deals on tech, fashion, food, travel & more. Plus enter cool contests. Students use SPC every time you shop to save money. Up to 30% off. Never miss a deal.",
  link: "https://spccard.ca/signup"
  },
  {​​​​​
  name: "Booster Juice",
  imgLink: "./../assets/deals/booster.png",
  description: "Get a FREE Super Booster with the purchase of a regular sized smoothie. Offer valid only at Student Center Location.",
  link: "https://www.boosterjuice.com/current-promotions/"
  },
  {​​​​​
  name: "John's AUTO CENTER",
  imgLink: "./../assets/deals/auto.png",
  description: "10% off on Labor charges for all services. Offer valid at Main Street Branch.",
  link: "https://johnsautocenter.net/"
  },​​​​
  {​​​​​
  name: "Dominos",
  imgLink: "./../assets/deals/dominos.png",
  description: "Get 50% off regular menu priced pizza when ordering online using promo code 50STDNT.",
  link: "https://www.dominos.ca/en/pages/order/coupon"
  },​​​​];
 
 constructor(
 private dataService: DataService,
 private router: Router
 ) { }
 
 ngOnInit(): void {
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
 goToLink(url: string){
  window.open(url, "_blank");
}
 
}