import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Feat2WidgetComponent} from "@feat2/ui";

@Component({
  selector: 'lib-feature1-ui',
  standalone: true,
  imports: [CommonModule, Feat2WidgetComponent],
  templateUrl: './feature1-ui.component.html',
  styleUrl: './feature1-ui.component.css',
})
export class Feature1UiComponent {}
