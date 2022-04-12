import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario.model';
import { DataService } from '../Services/data.service';

@Injectable()
export class AuthAPI {
  constructor(private data: DataService) {}


  public login():Promise<Usuario> {
    return this.data.post<any>('https://localhost:7126/api/Identity/Login', {"username": "string123G@", "password": "string123G@"})
  }

  public registro(){

  }
}
