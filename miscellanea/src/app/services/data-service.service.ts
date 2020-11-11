import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sharedVariable: string = "shared";
  
  constructor() { }
}
