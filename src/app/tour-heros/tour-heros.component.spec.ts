import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourHerosComponent } from './tour-heros.component';

describe('TourHerosComponent', () => {
  let component: TourHerosComponent;
  let fixture: ComponentFixture<TourHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourHerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
