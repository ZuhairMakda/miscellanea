import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingViewDialogComponent } from './listing-view-dialog.component';

describe('ListingViewDialogComponent', () => {
  let component: ListingViewDialogComponent;
  let fixture: ComponentFixture<ListingViewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingViewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
