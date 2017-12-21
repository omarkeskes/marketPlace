import {Http, Response,Headers} from '@angular/http';
import 'rxjs/Rx';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class LoginService {

  constructor(private http:Http) { }

  login(user:any){

    var headers=new Headers();
    headers.append('Content-type','Application/json');
    return this.http.post('/api/market/login',JSON.stringify(user),{headers:headers}).map(
        (response:Response)=>{
          return response.json();
        }
    );
  }

  getUser(){
    return JSON.parse(sessionStorage.getItem('login'));
  }

}
