import { Links} from "./links"
import { Meta } from './user';

export class Comment {
    post_id : number;
    name: string;
    email: string;
    user_id? : string;
    title? : string;
    body : string;
    _links? : Links;
}

export class ComResObject {
  _meta: Meta;
  result: Array<Comment>;
}
