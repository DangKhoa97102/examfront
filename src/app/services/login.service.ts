import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {}

  // get current user (which logged in)
  public getCurrentUser() {
    return this.http.get(baseUrl + '/current-user')
  }

   // generate token
  public generateToken(loginData:any) {
    return this.http.post(baseUrl + '/generate-token', loginData);
  }

  // login user: set token is localStorage
  public loginUser(token:any) {
    localStorage.setItem("token", token);
    return true;
  }

  // is user logged in or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem("token");
    if(tokenStr == undefined || tokenStr == null || tokenStr == '') {
      return false;
    } else {
      return true;
    }
  }

  // logout: remove token from localStorage
  public logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true
  }

  // get token
  public getToken() {
    return localStorage.getItem("token");
  }

  // set UserDetail
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // get User
  public getUser() {
    let userStr = localStorage.getItem('user');
    if(userStr != null) {
      return JSON.parse(userStr);
    } else { 
      this.logout();
      return null;
    }
  }

  // get user role
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}