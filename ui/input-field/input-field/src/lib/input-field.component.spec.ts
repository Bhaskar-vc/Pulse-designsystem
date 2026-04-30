import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VcInputField } from './input-field.component';

describe('VcInputField', () => {
  let component: VcInputField;
  let fixture: ComponentFixture<VcInputField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcInputField],
    }).compileComponents();

    fixture = TestBed.createComponent(VcInputField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
