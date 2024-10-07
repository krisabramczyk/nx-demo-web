import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {USER_API_TOKEN} from "@feat1/models";
import {tap} from "rxjs";
import {provideFeature1Infra} from "@feat1/infrastructure";
import {RouterLink} from "@angular/router";
import {User} from "@core/models";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss',
  providers: [
    provideFeature1Infra()
  ]
})
export class HomePageComponent {
  private readonly usersApi = inject(USER_API_TOKEN);
  users: User[] = [];

  constructor() {
    this.fetchUsers();
  }

  private fetchUsers(): void {
    this.usersApi.fetchUsers$().pipe(
      tap((users) => {
        this.users = structuredClone(users || []);
      })
    ).subscribe()
  }
}
