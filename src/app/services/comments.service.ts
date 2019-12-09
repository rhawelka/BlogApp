import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Comment } from '../models/comment';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  commentsUrl  = environment.goRestApiUrl;
  accesstoken = environment.accessTokenGoRest;

  headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': this.accesstoken})

  constructor(private _httpClient: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this._httpClient.get<Comment[]>(`${this.commentsUrl}comments`,{headers: this.headers}).pipe(map(res=>res['result']));
  }

  addComment(comment: Comment): Observable<Comment>{
    return this._httpClient.post<Comment>(`${this.commentsUrl}comments` , comment, {headers: this.headers});
  }

  getCommentsByPostId(postId: number): Observable <Array<Comment>>{
    const params$ = new HttpParams().set("post_id", postId +  "");
    return this._httpClient.get<Array<Comment>>(this.commentsUrl+"comments", {
      headers: this.headers,
      params: params$
    }).pipe(map(res=>res['result']));
  }

  // getCommentById(commentId: number): Observable<Comment>{
  //   return this._httpClient.get<Comment>
  // (`${this.commentsUrl}comments${commentId}`, {headers: this.headers}).pipe(map(res=>res['result']));
  // }

  // updateComment(comment: Comment): Observable<Comment>{
  //   return this._httpClient.patch<Comment>(this.commentUrl+"/"
  // +comment.post_id,comment, {headers: this.headers}).pipe(map(res=>res['result']));
  // }

  // deleteComment(userId: number){
  //   return this._httpClient.delete<Comment>(this.commentsUrl+"/"+userId, {
  //     headers: this.headers
  //   }).pipe(map(res=>res['result']));
  // }
}
