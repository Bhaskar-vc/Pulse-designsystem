import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VcFileUpload } from './file-upload.component';

describe('VcFileUpload', () => {
  let component: VcFileUpload;
  let fixture: ComponentFixture<VcFileUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcFileUpload],
    }).compileComponents();

    fixture = TestBed.createComponent(VcFileUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
