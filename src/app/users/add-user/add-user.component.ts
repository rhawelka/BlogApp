import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {


@ViewChild('contactForm', {static: false})
contactForm: NgForm;

  user = new User();
  gender = ["male", "female"];

  constructor(private _userService: UserService) {
   }

  onSubmit(){
    this.addUser(this.user);
    this.resetForm();
  }

  resetForm(){
    this.user= new User();
    this.contactForm.reset();
  }

  addUser(user) {
    this
        ._userService
        .addUser(user)
        .subscribe(res => {
            console.log(res);
        })
}
  ngOnInit() {
    this.user.gender = "male";
  }
}
