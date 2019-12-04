import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from 'src/app/models/user';
import {Params, ActivatedRoute} from '@angular/router';
import {UserService} from 'src/app/services/user.service';
import {NgForm} from '@angular/forms';

@Component({selector: 'app-edit-user', templateUrl: './edit-user.component.html', styleUrls: ['./edit-user.component.scss']})
export class EditUserComponent implements OnInit {

    @ViewChild('contactForm', {static: false})
    contactForm : NgForm;

    user = new User();
    userId : number;
    gender = ["male", "female"];

    constructor(private _userService : UserService, private _route : ActivatedRoute) {}

    onSubmit(){
      this.updateUser(this.user);
    }

    resetForm(){
      this.user = new User();
      this.contactForm.reset();
    }

    getUserById() {
        this
            ._userService
            .getUserById(this.userId)
            .subscribe(res => {
                this.user = res;
            })
    }

    updateUser(user) {
        this
            ._userService
            .updateUser(user)
            .subscribe(res => {
                console.log(res);
            })
    }
    ngOnInit() {
        this
            ._route
            .paramMap
            .subscribe((param : Params) => {
                this.userId = param.get('id');
                this.getUserById();
            });
    }
}
