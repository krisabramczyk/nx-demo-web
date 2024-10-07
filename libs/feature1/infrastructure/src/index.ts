import {UserHttpService} from "./lib/http/user.http-service";
import {Provider} from "@angular/core";
import {USER_API_TOKEN} from "@feat1/models";


export const provideFeature1Infra = (): Provider[] => {
  return  [
    {provide: USER_API_TOKEN, useClass: UserHttpService}
  ]
}
