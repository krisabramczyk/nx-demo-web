import {COMPANY_PROVIDER} from "@feat2/models";
import {Provider} from "@angular/core";
import {Feat3HttpService} from "./feat3.http-service";

export const provideCompanyProvider = (): Provider => ({
  provide: COMPANY_PROVIDER,
  useClass: Feat3HttpService
})
