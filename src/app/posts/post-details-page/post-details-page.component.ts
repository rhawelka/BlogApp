import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from "@angular/router";
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.scss']
})
export class PostDetailsPageComponent implements OnInit {

  constructor(private _postService: PostsService,private route: ActivatedRoute) { }

  postId: string;
  post: Post;

  getPostById(postId){
    this._postService.getPostById(postId).subscribe(res=>{
      this.post = res;
      console.log(this.post);
    });
  }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get("postId");
    this.getPostById(this.postId);
  }

}
