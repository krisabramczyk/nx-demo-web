import {Directive, inject, OnInit} from "@angular/core";
import {USER_API_TOKEN} from "@feat1/models";
import {ActivatedRoute} from "@angular/router";
import {tap} from "rxjs";
import {User} from "@core/models";

@Directive()
export abstract class BaserUserPage implements OnInit  {
    protected readonly usersApi = inject(USER_API_TOKEN);
  protected  readonly route: ActivatedRoute = inject(ActivatedRoute);
  user: User | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }

    this.usersApi.fetchUser(id).pipe(
      tap( user => {
        this.user = structuredClone(user);
      })
    ).subscribe()
  }
}
