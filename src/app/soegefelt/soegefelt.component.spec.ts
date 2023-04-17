import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoegefeltComponent } from './soegefelt.component';

describe('SoegefeltComponent', () => {
  let component: SoegefeltComponent;
  let fixture: ComponentFixture<SoegefeltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoegefeltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoegefeltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
