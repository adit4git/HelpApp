import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthSvc } from '@app/_services';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  loading = false;
  currentUser: User;
  userFromApi: User;
  constructor(
    private userService: UserService,
    private authenticationService: AuthSvc
  ) {
      this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
        this.loading = true;
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });

  }

}
