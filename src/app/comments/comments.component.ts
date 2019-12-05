import {Component, OnInit, Input} from '@angular/core';
import {CommentsService} from '../services/comments.service';
import {Comment} from '../models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})

export class CommentsComponent implements OnInit {

    @Input()
    postId : number;
    commentsToPost = [];
    showCommentsToUser: boolean = false;

    constructor(private _commentsService : CommentsService) {}

    showComments(){
      this.showCommentsToUser = !this.showCommentsToUser;
    }

    getCommentsByPostId(postId : number) {
        this
            ._commentsService
            .getCommentsByPostId(postId)
            .subscribe(res => {
                this.commentsToPost = res;
            });

    }

    ngOnInit() {
        this.getCommentsByPostId(this.postId);
    }
}
