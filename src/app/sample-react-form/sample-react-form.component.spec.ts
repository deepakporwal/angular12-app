import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleReactFormComponent } from './sample-react-form.component';

describe('SampleReactFormComponent', () => {
  let component: SampleReactFormComponent;
  let fixture: ComponentFixture<SampleReactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleReactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleReactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
