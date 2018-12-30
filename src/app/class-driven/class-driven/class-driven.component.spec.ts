import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDrivenComponent } from './class-driven.component';

describe('ClassDrivenComponent', () => {
  let component: ClassDrivenComponent;
  let fixture: ComponentFixture<ClassDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
