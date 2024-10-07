import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaserUserPage} from "../baser-user.page";
import {provideFeature1Infra} from "@feat1/infrastructure";
import {isUserDirector} from "@feat1/application";
import {Feature1UiComponent} from "@feat1/ui";

@Component({
  selector: 'lib-view-page',
  standalone: true,
  imports: [CommonModule, Feature1UiComponent],
  templateUrl: './view-page.component.html',
  styleUrl: './view-page.component.scss',  providers: [
    provideFeature1Infra()
  ]
})
export class ViewPageComponent extends BaserUserPage implements OnInit {
  isDirector = false;
  override ngOnInit() {
    super.ngOnInit();
    this.isDirector = isUserDirector(this.user);
  }
}
