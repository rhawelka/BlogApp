import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.scss']
})
export class HomeSidebarComponent implements OnInit {

  constructor(private _postService: PostsService) { }

  postsToSidebarArr: Array<Post> = [];
  private _numOfPosts: number = 4;

  getPostsToSidebar(numOfPosts){
    for (let i = 1; i <= numOfPosts; i++) {
    this._postService.getPostById(i).subscribe( post => {
    this.postsToSidebarArr.push(post);
    });
  }
}






  ngOnInit() {
    this.getPostsToSidebar(this._numOfPosts);
  }

}
