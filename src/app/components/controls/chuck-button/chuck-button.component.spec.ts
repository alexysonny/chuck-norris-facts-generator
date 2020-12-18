import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckButtonComponent } from './chuck-button.component';

describe('ChuckButtonComponent', () => {
  let component: ChuckButtonComponent;
  let fixture: ComponentFixture<ChuckButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuckButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
