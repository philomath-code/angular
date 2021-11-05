import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleBootstrapAppComponent } from './sample-bootstrap-app.component';

describe('SampleBootstrapAppComponent', () => {
  let component: SampleBootstrapAppComponent;
  let fixture: ComponentFixture<SampleBootstrapAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleBootstrapAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleBootstrapAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
