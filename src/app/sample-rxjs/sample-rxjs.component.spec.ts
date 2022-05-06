import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRxjsComponent } from './sample-rxjs.component';

describe('SampleRxjsComponent', () => {
  let component: SampleRxjsComponent;
  let fixture: ComponentFixture<SampleRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
