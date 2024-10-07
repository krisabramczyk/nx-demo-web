import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Feature3UiWidgetFeat3Component } from './feature3-ui-widget-feat3.component';

describe('Feature3UiWidgetFeat3Component', () => {
  let component: Feature3UiWidgetFeat3Component;
  let fixture: ComponentFixture<Feature3UiWidgetFeat3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feature3UiWidgetFeat3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Feature3UiWidgetFeat3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
