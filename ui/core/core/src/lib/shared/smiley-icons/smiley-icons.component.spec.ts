import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmileyIconsComponent } from './smiley-icons.component';

describe('SmileyIconsComponent', () => {
  let component: SmileyIconsComponent;
  let fixture: ComponentFixture<SmileyIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmileyIconsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmileyIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
