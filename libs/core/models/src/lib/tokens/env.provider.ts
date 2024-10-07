import {InjectionToken} from "@angular/core";


export const ENV = new InjectionToken<Env>('ENV_TOKEN');

export type Env = {
  apiUrl: string;
}
