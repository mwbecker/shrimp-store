import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrimpSearchComponent } from './shrimp-search.component';

describe('ShrimpSearchComponent', () => {
  let component: ShrimpSearchComponent;
  let fixture: ComponentFixture<ShrimpSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShrimpSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShrimpSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
