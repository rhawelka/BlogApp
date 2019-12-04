import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Comment } from '../models/comment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  testApiUrl = "https://gorest.co.in/public-api/comments?_format=json&access-token=Gvea-qrynZqnplQz_WtjyQiaoK8oNk0OjRlt";
  testAddCommentUrl = "https://gorest.co.in/public-api/comments";
  accesstoken = "Gvea-qrynZqnplQz_WtjyQiaoK8oNk0OjRlt";
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer Gvea-qrynZqnplQz_WtjyQiaoK8oNk0OjRlt'
  })

  constructor(private _httpClient: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this._httpClient.get<Comment[]>(this.testApiUrl).pipe(map(res=>res['result']));
  }

  addComment(comment: Comment): Observable<Comment>{
    return this._httpClient.post<Comment>(this.testAddCommentUrl, comment,{headers: this.headers}).pipe(map(res=>res['result']));
  }

  getCommentById(commentId: number): Observable<Comment>{
    // const params$ = new HttpParams().set("id", userId +  "");
    // console.log(params$);
    return this._httpClient.get<Comment>(this.testAddCommentUrl+"/"+commentId, {
      headers: this.headers
    }).pipe(map(res=>res['result']));
  }

  getCommentsByPostId(postId: number): Observable <Array<Comment>>{
    // const params$ = new HttpParams().set("id", userId +  "");
    // console.log(params$);
    return this._httpClient.get<Array<Comment>>(this.testApiUrl+"&post_id="+postId, {
      headers: this.headers
    }).pipe(map(res=>res['result']));
  }


  updateComment(comment: Comment): Observable<Comment>{
    return this._httpClient.patch<Comment>(this.testAddCommentUrl+"/"+comment.post_id,comment, {headers: this.headers}).pipe(map(res=>res['result']));
  }

  deleteComment(userId: number){
    return this._httpClient.delete<Comment>(this.testAddCommentUrl+"/"+userId, {
      headers: this.headers
    }).pipe(map(res=>res['result']));
  }
}
