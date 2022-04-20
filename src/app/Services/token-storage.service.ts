import { Injectable } from '@angular/core';



const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  public token: any;

  constructor() {
    const token = localStorage.getItem(TOKEN_KEY);
    this.token = token;
   }
  signOut(): void {
    localStorage.clear();
  }
  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {

    const roleKey = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';
    const nameKey = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name';
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}
