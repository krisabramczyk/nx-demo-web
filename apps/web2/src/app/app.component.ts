import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Feature3UiWidgetFeat3Component} from "@feat3/ui/widget";
import {Feat2WidgetComponent} from "@feat2/ui";

@Component({
  standalone: true,
  imports: [RouterModule, Feature3UiWidgetFeat3Component, Feat2WidgetComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'web2';
}
