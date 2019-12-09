import {Component, OnInit, Input} from '@angular/core';
import {CommentsService} from '../services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})

export class CommentsComponent implements OnInit {
    constructor(private _commentsService : CommentsService) {}

    @Input()
    postId : number;

    commentsToPost = [];
    showCommentsToUser: boolean = false;

    commentSend(comment){
     this.commentsToPost.push(comment);
    }

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
