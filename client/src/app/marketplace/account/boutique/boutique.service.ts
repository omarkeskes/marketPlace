import {Http, Response,Headers} from '@angular/http';
import 'rxjs/Rx';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class BoutiqueService {

  constructor(private http:Http) { }

    getArticles(login:any){
      return this.http.get('/api/market/boutique/articles/'+login).map(
        (response:Response)=>{
          return response.json();
        }
      );
  }

}
