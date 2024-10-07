import {Observable, of} from "rxjs";
import {Env, ENV, User} from "@core/models";
import {inject} from "@angular/core";
import { UserApiProvider} from "@feat1/models";

const users: User[] = [
  {id: '123', login: 'Chris', email: 'Chris@nursa.com'},
  {id: '234', login: 'Misza', email: 'Misza@nursa.com'},
  {id: '345', login: 'Shira', email: 'Shira@nursa.com', role: 'director'},
]

export class UserHttpService implements UserApiProvider {
  private readonly env: Env = inject(ENV);
  fetchUsers$(): Observable<User[]> {
    console.log(`Usage of env  in fetchUsers$ api url ${this.env.apiUrl}`);
    return of(structuredClone(users));
  }

  fetchUser(id: string): Observable<User | undefined> {
    console.log(`Usage of env in fetchUser api url ${this.env.apiUrl}`);
    return of(structuredClone(users).find(u => u.id?.toLowerCase()?.trim() === id?.toLowerCase()?.trim()))
  }
}
