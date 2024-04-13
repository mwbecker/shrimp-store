import { Component, OnInit } from '@angular/core';

import { Shrimp } from '../shrimp';
import { ShrimpService } from '../shrimp.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-shrimps',
  templateUrl: './shrimp.component.html',
  styleUrls: ['./shrimp.component.css']
})
export class ShrimpsComponent implements OnInit {
  shrimps: Shrimp[] = [];
  baseUrl: string = "http://127.0.0.1:5000";

  constructor(private shrimpService: ShrimpService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getShrimps();
  }

  getShrimps(): void {
    this.shrimpService.getShrimps()
    .subscribe(shrimps => this.shrimps = shrimps);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.shrimpService.addShrimp({ name } as Shrimp)
      .subscribe(shrimp => {
        this.shrimps.push(shrimp);
      });
  }
  delete(shrimp: Shrimp): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.shrimps = this.shrimps.filter(h => h !== shrimp);
        this.shrimpService.deleteShrimp(shrimp.id).subscribe();
      }
    });
  }
}