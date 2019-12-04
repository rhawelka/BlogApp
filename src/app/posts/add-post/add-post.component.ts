import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postTitle: string;
  postBody: string;
  user_id: number;

  @Input()
  userId:  number;

  constructor(private _postsService: PostsService) { }



  addPost(){
    const post: Post={
      id: null,
      user_id: this.userId.toString(),
      title: this.postTitle,
      body: this.postBody
    }
    this._postsService.addPost(post).subscribe(post => {
      console.log("dodano post: " +post.title)
    })
  }


  ngOnInit() {
  }

}
