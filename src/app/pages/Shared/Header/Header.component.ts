import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;

  private roles: string[] = [];
  isLoggedIn = false;
  mostrarPainelAdmin = false;
  username?: string;
  constructor(private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
