import {Meta} from '@angular/platform-browser';
import { Links } from './links';

export class Post {
    id : string;
    user_id : string;
    title : string;
    body : string;
    _links? : Links;
}

export class PostsResObject {
    _meta : Meta;
    result : Post[];
}
