import {Links} from "./links";

export class User {
    id : string;
    first_name? : string;
    last_name? : string;
    gender? : string;
    dob? : string;
    email? : string;
    phone? : string;
    website? : string;
    address? : string;
    status? : string;
    _links? : Links;
}

export class Meta {
  success: boolean;
  code: number;
  message: string;
  totalCount: number;
  pageCount: number;
  currentPage: number;
  perPage: number;
  rateLimit: RateLimit;
}

export class RateLimit {
  limit: number;
  remaining: number;
  reset: number;
}


export class UserResObject {
  result: Array<User>;
}
