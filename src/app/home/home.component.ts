import {Component, OnInit} from '@angular/core';
import {Post} from '../models/post';
import {PostsService} from '../services/posts.service';
declare var $: any;

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss']})
export class HomeComponent implements OnInit {

    constructor(private _postService : PostsService) {}

    posts : Array < Post > = [];
    private _numOfPosts : number = 4;

    getPostsToHomePage(numOfPosts) {
        for (let i = 1; i <= numOfPosts; i++) {
            this
                ._postService
                .getPostById(i)
                .subscribe(post => {
                    this
                        .posts
                        .push(post);
                });
        }
    }

    ngOnInit() {
        this.getPostsToHomePage(this._numOfPosts);
    }
}
