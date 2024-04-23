import { Component, OnInit } from '@angular/core';

import { Shrimp } from '../shrimp';
import { ShrimpService } from '../services/shrimp.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-shrimps',
  templateUrl: './shrimp.component.html',
  styleUrls: ['./shrimp.component.css']
})
export class ShrimpsComponent implements OnInit {
  shrimps: Shrimp[] = [];
  baseUrl: string = environment.httpBaseURL;

  constructor(private shrimpService: ShrimpService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getShrimps();
  }
  
  getShrimps(): void {
    this.shrimpService.getShrimps()
    .subscribe(shrimps => this.shrimps = shrimps);
  }

  onSubmit(name: string, imgFileInput: HTMLInputElement): void {
    const imgFile = imgFileInput.files ? imgFileInput.files[0] : null;
    if (!imgFile) {
      console.error('No file selected.');
      return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', imgFile);
    if (!name) { return; }
    this.shrimpService.addShrimp(formData)
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