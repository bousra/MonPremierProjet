import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardprospectsComponent } from './dashboardprospects.component';

describe('DashboardprospectsComponent', () => {
  let component: DashboardprospectsComponent;
  let fixture: ComponentFixture<DashboardprospectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardprospectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardprospectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
