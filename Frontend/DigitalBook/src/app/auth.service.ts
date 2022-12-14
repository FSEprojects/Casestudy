import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
const AUTH_API = "http://localhost:8086/api/v1/digitalbooks/author/";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient,public route:Router) { }
  login(username: string, password: string) {
    return this.http.post(AUTH_API+ 'login',{
      username,
      password
    });
  }

  register(username: string, email: string, password: string,userrole:string) {
    return this.http.post(AUTH_API+ 'signup',{
      username,
      email,
      password,userrole
    });
  }
  logout() {  
    // localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('isLoggedIn'); 
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userRole');
    localStorage.removeItem('currentUserId');
    this.route.navigate(['/home']);  
  }
  
}
