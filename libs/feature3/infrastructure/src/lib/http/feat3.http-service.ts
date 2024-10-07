import {Company, CompanyProvider} from "@feat2/models";
import {Observable, of} from "rxjs";

const companies: Company[] = [
  {id: '321', name: 'Amazon', address: 'Some Road 2', phone: '121212'},
  {id: '789', name: 'Nursa', address: 'Utah road'},
  {id: '123', name: 'Meta', address: 'Some Road 1'},
];

export class Feat3HttpService implements CompanyProvider {
  fetchCompany$(id: string): Observable<Company | undefined> {
    return of(companies.find(c => c.id?.toLowerCase()?.trim() === id?.toLowerCase()?.trim()))
  }

  fetchCompanies$(): Observable<Company[]> {
    return of(companies);
  }

}
