import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBootstrapLibComponent } from './angular-bootstrap-lib.component';

describe('AngularBootstrapLibComponent', () => {
  let component: AngularBootstrapLibComponent;
  let fixture: ComponentFixture<AngularBootstrapLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularBootstrapLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBootstrapLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
