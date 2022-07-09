import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesimonyComponent } from './tesimony.component';

describe('TesimonyComponent', () => {
  let component: TesimonyComponent;
  let fixture: ComponentFixture<TesimonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesimonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
