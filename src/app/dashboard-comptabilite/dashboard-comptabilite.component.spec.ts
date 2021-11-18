import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComptabiliteComponent } from './dashboard-comptabilite.component';

describe('DashboardComptabiliteComponent', () => {
  let component: DashboardComptabiliteComponent;
  let fixture: ComponentFixture<DashboardComptabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComptabiliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComptabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
