import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({selector: 'app-template-driven', templateUrl: './template-driven.component.html', styleUrls: ['./template-driven.component.scss']})
export class TemplateDrivenComponent implements OnInit {

@ViewChild('contactForm', {static: false})
contactForm: NgForm;

    message = new TemplateMessage();
    gender = ["male", "female"];

    constructor() {}

    ngOnInit() {}

    onSubmit(){
      console.log(this.message);
      this.resetForm();
    }
    resetForm(){
      this.message = new TemplateMessage();
      this.contactForm.reset();
    }

}

class TemplateMessage {
    constructor(public email?: string, public body?: string, public password?: string,
      public gender= "male") {}
}
