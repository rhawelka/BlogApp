import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  testApiUrl = 'https://gorest.co.in/public-api/posts?_format=json&access-token=Gvea-qrynZqnplQz_WtjyQiaoK8oNk0OjRlt';
  testAddPostUrl = 'https://gorest.co.in/public-api/posts';
  accesstoken = 'Gvea-qrynZqnplQz_WtjyQiaoK8oNk0OjRlt';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer Gvea-qrynZqnplQz_WtjyQiaoK8oNk0OjRlt'
  })

  constructor(private _httpClient: HttpClient) {}

  getPostsByUserId(userId: number): Observable<Post[]> {
    return this._httpClient.get<Post[]>('https://gorest.co.in/public-api/posts?user_id='+
    userId +'&_format=json&access-token=Gvea-qrynZqnplQz_WtjyQiaoK8oNk0OjRlt').pipe(map(res=>res['result']));
  }

  getPosts(): Observable<Post[]> {
    return this._httpClient.get<Post[]>(this.testApiUrl).pipe(map(res=>res['result']));
  }

  addPost(post: Post): Observable<Post>{
    return this._httpClient.post<Post>(this.testAddPostUrl, post,{headers: this.headers}).pipe(map(res=>res['result']));
  }

  getPostById(postId: number): Observable<Post>{
    // const params$ = new HttpParams().set("id", userId +  "");
    // console.log(params$);
    return this._httpClient.get<Post>(this.testAddPostUrl+'/'+postId, {
      headers: this.headers
    }).pipe(map(res=>res['result']));
  }

  updatePost(post: Post): Observable<Post>{
    return this._httpClient.patch<Post>(this.testAddPostUrl+'/'+post.id,post, {headers: this.headers}).pipe(map(res=>res['result']));
  }

  deletePost(postId: number){
    return this._httpClient.delete<Post>(this.testAddPostUrl+'/'+postId, {
      headers: this.headers
    }).pipe(map(res=>res['result']));
  }
}
