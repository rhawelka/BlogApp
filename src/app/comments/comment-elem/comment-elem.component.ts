import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/comment'

@Component({
  selector: 'app-comment-elem',
  templateUrl: './comment-elem.component.html',
  styleUrls: ['./comment-elem.component.scss']
})
export class CommentElemComponent implements OnInit {

  @Input()
  comment: Comment;

  constructor() { }

  ngOnInit() {
  }

}
