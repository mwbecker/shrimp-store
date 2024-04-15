import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Shrimp } from '../shrimp';
import { ShrimpService } from '../services/shrimp.service';

@Component({
  selector: 'app-shrimp-search',
  templateUrl: './shrimp-search.component.html',
  styleUrls: [ './shrimp-search.component.css' ]
})
export class ShrimpSearchComponent implements OnInit {
  shrimps$!: Observable<Shrimp[]>;
  baseUrl: string = environment.httpBaseURL;
  private searchTerms = new Subject<string>();

  constructor(private shrimpService: ShrimpService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.shrimps$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.shrimpService.searchShrimps(term)),
    );
  }
}