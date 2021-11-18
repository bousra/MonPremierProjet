import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptabiliteBootsrapComponent } from './comptabilite-bootsrap.component';

describe('ComptabiliteBootsrapComponent', () => {
  let component: ComptabiliteBootsrapComponent;
  let fixture: ComponentFixture<ComptabiliteBootsrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptabiliteBootsrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptabiliteBootsrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
