import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBysectorComponent } from './client-bysector.component';

describe('ClientBysectorComponent', () => {
  let component: ClientBysectorComponent;
  let fixture: ComponentFixture<ClientBysectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientBysectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBysectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
