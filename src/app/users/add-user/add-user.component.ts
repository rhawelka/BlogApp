import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {NgForm} from '@angular/forms';
import {User} from 'src/app/models/user';
import * as $ from 'jquery';

@Component({selector: 'app-add-user', templateUrl: './add-user.component.html', styleUrls: ['./add-user.component.scss']})
export class AddUserComponent implements OnInit {

    @ViewChild('contactForm', {static: false})
    contactForm : NgForm;
    gender = ["male", "female"];
    user = new User();
    submittedUser : any;
    errorsFromSubmit: Array<any>;

    constructor(private _userService : UserService) {}

    onSubmit() {
        this.addUser(this.user);
        $(".slide-container").slideDown("fast");
    }

    resetForm() {
        this.user = new User();
        this
            .contactForm
            .reset();
        $(".slide-container").slideUp("slow");
    }

    addUser(user) {
        this
            ._userService
            .addUser(user)
            .subscribe(res => {
                this.submittedUser = res;
                this.showAddErrors(this.submittedUser._meta.code);
            })
    }

    showAddErrors(respCode){
      if(respCode !== 200){
        this.errorsFromSubmit = this.submittedUser.result;
      } else {
        this.errorsFromSubmit = [];
      }
    }


    ngOnInit() {
        $(".slide-container").hide();
    }
}
