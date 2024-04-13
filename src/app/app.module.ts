import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShrimpDetailComponent } from './shrimp-detail/shrimp-detail.component';
import { ShrimpsComponent } from './shrimps/shrimp.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ShrimpSearchComponent } from './shrimp-search/shrimp-search.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ShrimpDetailComponent,
    HttpClientModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    ShrimpsComponent,
    ShrimpSearchComponent,
    ConfirmationDialogComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }