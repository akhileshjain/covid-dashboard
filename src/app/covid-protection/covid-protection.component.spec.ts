import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidProtectionComponent } from './covid-protection.component';

describe('CovidProtectionComponent', () => {
  let component: CovidProtectionComponent;
  let fixture: ComponentFixture<CovidProtectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidProtectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
