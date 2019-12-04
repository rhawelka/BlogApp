import {Component, OnInit} from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {User} from 'src/app/models/user';

@Component({selector: 'app-users-list', templateUrl: './users-list.component.html', styleUrls: ['./users-list.component.scss']})
export class UsersListComponent implements OnInit {

    constructor(private _userService : UserService) {}

    users$ : Array < User >;
    user$ : User;

    onSelect(user: User) {
      this.user$ = user;
      console.log(user);
      console.log(this.user$);
    }

    getUsers() {
        this
            ._userService
            .getUsers()
            .subscribe(res => {
                this.users$ = res;
            })
    }

    deleteUser(id) {
        this
            ._userService
            .deleteUser(id)
            .subscribe(res => {
                console.log(res);
                this.getUsers();
            });

    }

    ngOnInit() {
        this.getUsers();
    }
}
