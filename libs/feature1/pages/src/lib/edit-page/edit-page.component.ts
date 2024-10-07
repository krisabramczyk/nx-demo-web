import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {provideFeature1Infra} from "@feat1/infrastructure";
import {BaserUserPage} from "../baser-user.page";

@Component({
  selector: 'lib-edit-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.scss',
  providers: [
    provideFeature1Infra()
  ]
})
export class EditPageComponent extends BaserUserPage {

}
