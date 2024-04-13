import { Component, OnInit } from '@angular/core';
import { Shrimp } from '../shrimp';
import { ShrimpService } from '../shrimp.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  shrimps: Shrimp[] = [];

  constructor(private shrimpService: ShrimpService) { }

  ngOnInit(): void {
    this.getShrimps();
  }

  getShrimps(): void {
    this.shrimpService.getShrimps()
      .subscribe(shrimps => this.shrimps = shrimps.slice(1, 5));
  }
}