import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditBursariesComponent } from './edit-bursaries.component';

describe('EditBursariesComponent', () => {
  let component: EditBursariesComponent;
  let fixture: ComponentFixture<EditBursariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBursariesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBursariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
