import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsUrl  = environment.goRestApiUrl;
  accesstoken = environment.accessTokenGoRest;

  headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': this.accesstoken})


  constructor(private _httpClient: HttpClient) {}

  getPostsByUserId(userId: number): Observable<Post[]> {
    return this._httpClient.get<Post[]>(`${this.postsUrl}posts?user_id=${userId}`, {headers: this.headers}).pipe(map(res=>res['result']));
  }

  // getPostsByUserId(userId: number): Observable<Post[]> {
  //   return this._httpClient.get<Post[]>('https://gorest.co.in/public-api/posts?user_id='+
  //   userId +'&_format=json&access-token=Gvea-qrynZqnplQz_WtjyQiaoK8oNk0OjRlt').pipe(map(res=>res['result']));
  // }

  getPosts(): Observable<Post[]> {
    return this._httpClient.get<Post[]>(`${this.postsUrl}posts`,{headers: this.headers}).pipe(map(res=>res['result']));
  }

  addPost(post: Post): Observable<Post>{
    return this._httpClient.post<Post>(`${this.postsUrl}posts` , post, {headers: this.headers});
  }

  getPostById(postId: number): Observable<Post>{
    return this._httpClient.get<Post>(`${this.postsUrl}posts/${postId}`, {headers: this.headers}).pipe(map(res=>res['result']));
  }

  updatePost(post: Post): Observable<Post>{
    return this._httpClient.patch<Post>(`${this.postsUrl}posts/${post.id}`,post, {headers: this.headers});
  }

  deletePost(postId: number){
    return this._httpClient.delete<Post>(`${this.postsUrl}posts/${postId}`, {headers: this.headers});
  }
}
