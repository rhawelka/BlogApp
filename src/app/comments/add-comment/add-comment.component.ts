import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {CommentsService} from 'src/app/services/comments.service';
import {Comment} from '../../models/comment';
import { NgForm } from '@angular/forms';

@Component({selector: 'app-add-comment', templateUrl: './add-comment.component.html', styleUrls: ['./add-comment.component.scss']})
export class AddCommentComponent implements OnInit {

    @ViewChild('contactForm', {static: false})
    contactForm : NgForm;

    constructor(private _commentService : CommentsService) {}

    comment = new Comment();
    showComponent : boolean;
    post_id : number;
    name : string;
    email : string;
    commentBody : string;

    @Input()
    postId : number;

    onSubmit() {
        console.log("submit");
        this.addComment(this.comment);
        this.resetForm();
    }

    resetForm(){
      this.comment= new Comment();
      this.contactForm.reset();
    }

    showCommentComponent() {
        this.showComponent = !this.showComponent;
    }

    addComment(comment) {
        this
            ._commentService
            .addComment(comment)
            .subscribe(comment => {
                console.log(comment);
            })
    }

    ngOnInit() {
        this.showComponent = false;
    }
}
