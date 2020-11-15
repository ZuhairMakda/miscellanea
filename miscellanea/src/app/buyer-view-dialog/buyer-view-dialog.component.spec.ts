import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerViewDialogComponent } from './buyer-view-dialog.component';

describe('BuyerViewDialogComponent', () => {
  let component: BuyerViewDialogComponent;
  let fixture: ComponentFixture<BuyerViewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerViewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
