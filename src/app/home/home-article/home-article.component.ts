import {Component, OnInit, Input} from '@angular/core';
import {Post} from 'src/app/models/post';
declare var $ : any;

@Component({selector: 'app-home-article', templateUrl: './home-article.component.html', styleUrls: ['./home-article.component.scss']})
export class HomeArticleComponent implements OnInit {

    constructor() {}

    @Input()
    post : Post;

    ngOnInit() {}

}
