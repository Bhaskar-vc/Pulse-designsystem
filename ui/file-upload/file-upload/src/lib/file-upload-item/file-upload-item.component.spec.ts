import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VcFileUploadItem } from './file-upload-item.component';

describe('VcFileUploadItem', () => {
  let component: VcFileUploadItem;
  let fixture: ComponentFixture<VcFileUploadItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcFileUploadItem],
    }).compileComponents();

    fixture = TestBed.createComponent(VcFileUploadItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
