import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomViewComponent } from './random-view.component';

describe('RandomViewComponent', () => {
  let component: RandomViewComponent;
  let fixture: ComponentFixture<RandomViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
