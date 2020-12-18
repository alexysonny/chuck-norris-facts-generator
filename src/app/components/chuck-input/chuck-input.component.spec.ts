import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckInputComponent } from './chuck-input.component';

describe('ChuckInputComponent', () => {
  let component: ChuckInputComponent;
  let fixture: ComponentFixture<ChuckInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuckInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
