import {Observable} from "rxjs";
import {InjectionToken} from "@angular/core";
import {User} from "@core/models";

export const USER_API_TOKEN = new InjectionToken<UserApiProvider>(`USER_API_TOKEN`);

export type UserApiProvider = {
  fetchUsers$(): Observable<User[]>;
  fetchUser(id: string): Observable<User | undefined>;
}
