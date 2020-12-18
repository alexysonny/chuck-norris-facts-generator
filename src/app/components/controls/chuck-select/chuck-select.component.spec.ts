import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckSelectComponent } from './chuck-select.component';

describe('ChuckSelectComponent', () => {
  let component: ChuckSelectComponent;
  let fixture: ComponentFixture<ChuckSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuckSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
