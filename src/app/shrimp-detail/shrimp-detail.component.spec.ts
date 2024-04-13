import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrimpDetailComponent } from './shrimp-detail.component';

describe('ShrimpDetailComponent', () => {
  let component: ShrimpDetailComponent;
  let fixture: ComponentFixture<ShrimpDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShrimpDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShrimpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
