import {Component, OnInit} from '@angular/core';
import {PostsService} from 'src/app/services/posts.service';
import {Post} from 'src/app/models/post';

@Component({selector: 'app-read-more', templateUrl: './read-more.component.html', styleUrls: ['./read-more.component.scss']})
export class ReadMoreComponent implements OnInit {

    constructor(private _postService : PostsService) {}

    posts : Array < Post > = [];
    private _numOfPosts : number = 6;

    getPostsToHomePage(numOfPosts) :void {
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
