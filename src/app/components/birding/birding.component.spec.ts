import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdingComponent } from './birding.component';

describe('BirdingComponent', () => {
  let component: BirdingComponent;
  let fixture: ComponentFixture<BirdingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
