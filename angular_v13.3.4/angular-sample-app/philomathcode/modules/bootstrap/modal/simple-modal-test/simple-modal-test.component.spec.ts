import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleModalTestComponent } from './simple-modal-test.component';

describe('SimpleModalTestComponent', () => {
  let component: SimpleModalTestComponent;
  let fixture: ComponentFixture<SimpleModalTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleModalTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleModalTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
