import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Feature1UiComponent } from './feature1-ui.component';

describe('Feature1UiComponent', () => {
  let component: Feature1UiComponent;
  let fixture: ComponentFixture<Feature1UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feature1UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Feature1UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
