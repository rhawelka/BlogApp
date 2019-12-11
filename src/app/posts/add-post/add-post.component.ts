import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {PostsService} from 'src/app/services/posts.service';
import {Post} from 'src/app/models/post';
import {NgForm} from '@angular/forms';
declare var $ : any;

@Component({selector: 'app-add-post', templateUrl: './add-post.component.html', styleUrls: ['./add-post.component.scss']})
export class AddPostComponent implements OnInit {

    @ViewChild('addPostForm', {static: false})
    addPostForm : NgForm;

    @Input()
    userId : number;

    post = new Post();
    submittedPost: any;
    errorsFromSubmit: Array<any>;

    constructor(private _postsService : PostsService) {}

    onSubmit() {
        this.addPost(this.post);
        $(".slide-container").slideDown("fast");
    }

    resetForm() {
        this.post = new Post();
        this
            .addPostForm
            .reset();
        $(".slide-container").slideUp("slow");
    }

    addPost(post) {
        this
            ._postsService
            .addPost(post)
            .subscribe(res => {
                this.submittedPost = res;
                this.showAddErrors(this.submittedPost._meta.code)
            })
    }

    showAddErrors(respCode){
      if(respCode !== 200){
        this.errorsFromSubmit = this.submittedPost.result;
      } else {
        this.errorsFromSubmit = [];
      }
    }


    ngOnInit() {
        if (this.userId > 0) {
            this.post.user_id = this
                .userId
                .toString();
        }
        $(".slide-container").hide();

    }

}
