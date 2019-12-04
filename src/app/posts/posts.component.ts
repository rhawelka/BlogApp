import {Component, OnInit } from '@angular/core';
import {Post} from '../models/post';
import {PostsService} from '../services/posts.service';
import {User} from '../models/user';
import {UserService} from '../services/user.service';

@Component({selector: 'app-posts', templateUrl: './posts.component.html', styleUrls: ['./posts.component.scss']})
export class PostsComponent implements OnInit {

    posts : Array < Post > = [];
    post : Post;
    userId : number;
    usersIds: Array<number>;
    userToPost : Array < User > = [];

    constructor(private _userService : UserService, private _postsService : PostsService) {}

    getUsers(){
      this.getUserIdByPost();
      this.setUsersToArrayById();
    }
    addUserToUserArr(user){
      this.userToPost.push(user);
    }

    getUserIdByPost(){
        this.usersIds = this.posts.map(post => Number (post.user_id));
    }

    setUsersToArrayById(){
      for (let i = 0; i < this.usersIds.length; i++) {
        let userId = this.usersIds[i];
        this.getUserById(userId);
      }
    }

    getUserById(userId:number) {
        this
            ._userService
            .getUserById(userId).subscribe(user => {
              this.addUserToUserArr(user);
            });
    }

    getPostsAndUsers() {
        this
            ._postsService
            .getPosts()
            .subscribe(res => {
                this.posts = res;
                this.getUsers();
            });
    }
    ngOnInit() {
        this.getPostsAndUsers();
    }

}
