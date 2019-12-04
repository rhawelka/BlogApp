import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-user-all-posts-list',
  templateUrl: './user-all-posts-list.component.html',
  styleUrls: ['./user-all-posts-list.component.scss']
})
export class UserAllPostsListComponent implements OnInit {

  constructor() { }

  @Input()
  userPosts: Array<Post>;

  ngOnInit() {
  }

}
