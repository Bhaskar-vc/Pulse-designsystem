import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmileyButtonComponent } from './smiley-button.component';

describe('SmileyButtonComponent', () => {
  let component: SmileyButtonComponent;
  let fixture: ComponentFixture<SmileyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmileyButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmileyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
