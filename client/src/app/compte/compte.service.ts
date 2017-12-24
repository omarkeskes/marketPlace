import {Http, Response,Headers} from '@angular/http';
import 'rxjs/Rx';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class CompteService {

  constructor(private http:Http) { }

  getUser(id:any){
    return this.http.get('/api/market/user/'+id).map(
      (response:Response)=>{
          return response.json();
        }
    )
  }

  updateUser(data:any){
    var headers=new Headers();
    headers.append('Content-type','Application/json');
    return this.http.post('/api/market/user/update',JSON.stringify(data),{headers:headers}).map(
        (response:Response)=>{
          return response.json();
        }
    );
  }

}
