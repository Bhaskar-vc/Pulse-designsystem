import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VcListbox } from './listbox.component';

describe('VcListbox', () => {
  let component: VcListbox;
  let fixture: ComponentFixture<VcListbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcListbox],
    }).compileComponents();

    fixture = TestBed.createComponent(VcListbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
