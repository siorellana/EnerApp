import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcuseComponent } from './excuse.component';

describe('ExcuseComponent', () => {
  let component: ExcuseComponent;
  let fixture: ComponentFixture<ExcuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
