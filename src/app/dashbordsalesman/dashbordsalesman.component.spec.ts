import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordsalesmanComponent } from './dashbordsalesman.component';

describe('DashbordsalesmanComponent', () => {
  let component: DashbordsalesmanComponent;
  let fixture: ComponentFixture<DashbordsalesmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordsalesmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordsalesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
