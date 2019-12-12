import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinsDialogComponent } from './cabins-dialog.component';

describe('CabinsDialogComponent', () => {
  let component: CabinsDialogComponent;
  let fixture: ComponentFixture<CabinsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
