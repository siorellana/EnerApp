import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExcuseComponent } from './new-excuse.component';

describe('NewExcuseComponent', () => {
  let component: NewExcuseComponent;
  let fixture: ComponentFixture<NewExcuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExcuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExcuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
