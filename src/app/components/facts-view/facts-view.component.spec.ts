import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsViewComponent } from './facts-view.component';

describe('FactsViewComponent', () => {
  let component: FactsViewComponent;
  let fixture: ComponentFixture<FactsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
