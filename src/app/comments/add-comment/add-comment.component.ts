import {Component, OnInit, Input, ViewChild, Output} from '@angular/core';
import {CommentsService} from 'src/app/services/comments.service';
import {Comment} from '../../models/comment';
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']})
export class AddCommentComponent implements OnInit {
  constructor(private _commentService : CommentsService) {}

    @ViewChild('contactForm', {static: false})
    contactForm : NgForm;

    @Output()
    addCommentAction = new EventEmitter();

    @Input()
    postId : number;

    comment = new Comment();
    showComponent : boolean;

    onSubmit() {
        this.comment.post_id = this.postId;
        this.addComment(this.comment);
        this.addCommentAction.emit(this.comment);
        this.resetForm();
    }

    resetForm(){
      this.comment= new Comment();
      this.contactForm.reset();``
    }

    showAddCommentComponent() {
        this.showComponent = !this.showComponent;
    }

    addComment(comment) {
        this
            ._commentService
            .addComment(comment)
            .subscribe(comment => {
              console.log("zwrotka z API : ");
                console.log(comment);
            })
    }

    ngOnInit() {
        this.showComponent = false;
    }
}
