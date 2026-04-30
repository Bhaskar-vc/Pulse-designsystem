import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VcSpinner } from './spinner.component';

describe('VcSpinner', () => {
  let component: VcSpinner;
  let fixture: ComponentFixture<VcSpinner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcSpinner],
    }).compileComponents();

    fixture = TestBed.createComponent(VcSpinner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
