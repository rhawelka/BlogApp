import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, observable} from "rxjs";
import {User} from '../models/user';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class UserService {

    usersUrl  = environment.goRestApiUrl;
    accesstoken = environment.accessTokenGoRest;

    headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': this.accesstoken})

    constructor(private _httpClient : HttpClient) {}

    getUsers() : Observable < User[] > {
        return this._httpClient.get < User[] > (`${this.usersUrl}users`,{headers: this.headers})
        .pipe(map(res => res['result']));
    }

    addUser(user : User) : Observable < User > {
        return this._httpClient.post < User > (`${this.usersUrl}users` , user, {headers: this.headers});
    }

    getUserById(userId : number) : Observable < User > {
        return this._httpClient.get < User > (`${this.usersUrl}users/${userId}`, {headers: this.headers})
        .pipe(map(res => res['result']));
    }

    updateUser(user : User) : Observable < User > {
        return this._httpClient.patch < User > (`${this.usersUrl}users/${user.id}`,user, {headers: this.headers});
    }

    deleteUser(userId : number) {
        return this._httpClient.delete < User > (`${this.usersUrl}users/${userId}`, {headers: this.headers});
    }

}
