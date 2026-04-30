import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VcAvatar } from './avatar.component';

describe('VcAvatar', () => {
  let component: VcAvatar;
  let fixture: ComponentFixture<VcAvatar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcAvatar],
    }).compileComponents();

    fixture = TestBed.createComponent(VcAvatar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
