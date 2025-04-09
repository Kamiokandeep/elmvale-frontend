import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BursariesComponent } from './bursaries.component';

describe('BursariesComponent', () => {
  let component: BursariesComponent;
  let fixture: ComponentFixture<BursariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BursariesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BursariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
