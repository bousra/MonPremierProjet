import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySectorDemandeComponent } from './activity-sector-demande.component';

describe('ActivitySectorDemandeComponent', () => {
  let component: ActivitySectorDemandeComponent;
  let fixture: ComponentFixture<ActivitySectorDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitySectorDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySectorDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
