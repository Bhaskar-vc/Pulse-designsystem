import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarIconFilledComponent } from './star-icon-filled.component';

describe('StarIconFilledComponent', () => {
  let component: StarIconFilledComponent;
  let fixture: ComponentFixture<StarIconFilledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarIconFilledComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StarIconFilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
