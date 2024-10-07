import {Observable} from "rxjs";
import {Company} from "@feat2/models";
import {InjectionToken} from "@angular/core";

export const COMPANY_PROVIDER = new InjectionToken<CompanyProvider>('COMPANY_PROVIDER');

export interface CompanyProvider {
  fetchCompany$(id: string): Observable<Company | undefined>;
  fetchCompanies$(): Observable<Company[]>
}
