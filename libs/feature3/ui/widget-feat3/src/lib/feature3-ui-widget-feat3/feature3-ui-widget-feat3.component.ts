import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {provideCompanyProvider} from "@feat3/infrastructure";
import {Company, COMPANY_PROVIDER} from "@feat2/models";
import {take} from "rxjs";
import {Feature1UiComponent} from "@feat1/ui";
import {SimpleSortPipe} from "@core/application/pipes";
import {Feat2WidgetComponent} from "@feat2/ui";

@Component({
  selector: 'lib-feature3-ui-widget-feat3',
  standalone: true,
  imports: [CommonModule, Feature1UiComponent, SimpleSortPipe, Feat2WidgetComponent],
  templateUrl: './feature3-ui-widget-feat3.component.html',
  styleUrl: './feature3-ui-widget-feat3.component.css',
  providers: [
    provideCompanyProvider()
  ]
})
export class Feature3UiWidgetFeat3Component {
  private readonly companyProvider = inject(COMPANY_PROVIDER);
  readonly companies$ = this.companyProvider.fetchCompanies$().pipe(take(1));
}
