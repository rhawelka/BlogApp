import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  @ViewChild('addPostForm', {static: false})
  addPostForm: NgForm;

  post = new Post();

  @Input()
  userId:  number;

  constructor(private _postsService: PostsService) { }


  onSubmit(){
    this.addPost(this.post);
    this.resetForm();
  }

  resetForm() {
    this.post= new Post();
    this.addPostForm.reset();
  }


  addPost(post){
    this._postsService.addPost(post).subscribe(post => {
      console.log("dodano post: " +post.title)
    })
  }


  ngOnInit() {
    this.post.user_id = this.userId.toString();
  }

}
