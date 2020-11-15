import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { Buyer } from '../models/buyers';
import { Listing } from '../models/listing';
import { DataService } from '../services/data-service.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  tooltipPosition = this.positionOptions[3];

  name: string = "";
  price: number = 0;
  description: string = "";
  city: string = "";
  phone: string = "";
  user: string = "";
  condition: string = "";

  provinces: string[] = ["ON", "QC", "NL", "PE", "NS", "NB", "MB", "SK", "AB", "BC", "YT", "NT", "NU"]
  chosenProvince: string = "";

  listing: string[] = ["BUY", "SELL"]
  chosenListingType: string = "";

  buying: Promise<boolean>;

  boolBuying: boolean = false;


  selectedFile: File = null;

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    // const fd = new FormData();
    // fd.append('image', this.selectedFile, this.selectedFile.name);
    // this.http.post('http://localhost:4200/post',fd).subscribe(res => {console.log(res);})

    this.openSnackBar("Image upload received.", "Close")
  }

  
  constructor(
    public dataService: DataService,
    private router: Router,
    private http: HttpClient,
    private _snackBar: MatSnackBar
    ) { }

    public myGroup: FormGroup = new FormGroup({
      name: new FormControl({ value: this.name }, [Validators.required]),
      price: new FormControl({ value: this.price }, [Validators.required]),
      description: new FormControl({ description: this.description }, [Validators.required]),
      city: new FormControl({ city: this.city }, [Validators.required]),
      phone: new FormControl({ phone: this.phone }, [Validators.required]),
      user: new FormControl({ user: this.user }, [Validators.required]),
      condition: new FormControl({ condition: this.condition }, [Validators.required])


    });
    public hasError = (controlName: string, errorName: string) => {
      return this.myGroup.controls[controlName].hasError(errorName);
    }
  ngOnInit(): void {
  }

  goToDeals() {
    this.router.navigate(['/deals']);
  }

  goHome() {
    this.router.navigate(['/']);
  }

  buyOrSell(){
    if (this.chosenListingType === "BUY") {
      this.buying = Promise.resolve(true);
      this.boolBuying = true;
    } else {
      this.buying = Promise.resolve(false);
      this.boolBuying = false;
    }
  }

  submit() {

    console.log(this.name);
    console.log(this.price);
    console.log(this.description);
    console.log(this.city);
    console.log(this.chosenProvince);
    console.log(this.phone);
    console.log(this.user);

    if (this.name == "" || 
        this.price <= 0 || 
        this.description == "" ||
        this.city == "" || 
        this.chosenProvince == "" ||
        this.phone == "" ||
        this.user == "") {
          this.openSnackBar("Please fill in all fields.", "Close")

        } else {
          if (this.boolBuying) {
            let buyerData: Buyer = {
              name: this.name,
              price: this.price,
              description: this.description,
              condition: this.condition,
              city: this.city,
              province: this.chosenProvince,
              contact: {
                username: this.user,
                phoneNum: this.phone
              },
              postDate: new Date()
            };
            this.dataService.mathBuyers.push(buyerData);



          } else {
            let sellerData: Listing = {
              name: this.name,
              price: this.price,
              description: this.description,
              condition: this.condition,
              city: this.city,
              province: this.chosenProvince,
              contact: {
                username: this.user,
                phoneNum: this.phone
              },
              postDate: new Date(),
              imageLinks: ['./../assets/calculators/casio_SL300SV.jpg']
            };
            this.dataService.calculatorSellers.push(sellerData);

          }
        }

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

}
