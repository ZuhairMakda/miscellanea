import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  tooltipPosition = this.positionOptions[3];
  
  constructor(
    private dataService: DataService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  goToDeals() {
    this.router.navigate(['/deals']);
  }

  goHome() {
    this.router.navigate(['/']);
  }

}
