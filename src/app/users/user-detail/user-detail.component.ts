import {Component, OnInit} from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import {User} from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post';

@Component({selector: 'app-user-detail', templateUrl: './user-detail.component.html', styleUrls: ['./user-detail.component.scss']})
export class UserDetailComponent implements OnInit {

    constructor(private _userService : UserService, private _route : ActivatedRoute,private _postsService: PostsService) {}
    users : Array < User >;
    user : User;
    userId : number;
    userPosts: Array<Post>

    getUserById() {
        this
            ._userService
            .getUserById(this.userId)
            .subscribe(res => {
                this.user = res;
            })
    }

    getPostsByUserId(){
      this._postsService.getPostsByUserId(this.userId).subscribe(posts => {
        this.userPosts = posts;
      })
    }

    ngOnInit() {
        this
            ._route
            .paramMap
            .subscribe((param : Params) => {
                this.userId = param.get('id');
                this.getUserById();
                this.getPostsByUserId();
            });
    }
  }
