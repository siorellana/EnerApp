import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBronzeComponent } from './new-bronze.component';

describe('NewBronzeComponent', () => {
  let component: NewBronzeComponent;
  let fixture: ComponentFixture<NewBronzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBronzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBronzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
