import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VcDropdown } from './dropdown.component';

describe('VcDropdown', () => {
  let component: VcDropdown;
  let fixture: ComponentFixture<VcDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcDropdown],
    }).compileComponents();

    fixture = TestBed.createComponent(VcDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
