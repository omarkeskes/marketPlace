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

  addArticle(article:any){
    var headers=new Headers();
    headers.append('Content-type','Application/json');
    return this.http.post('/api/market/article/add',JSON.stringify(article),{headers:headers}).map(

        (response:Response)=>{
          return response.json();
        }
    );
  }

  deleteArticle(id:any){
    return this.http.delete('/api/market/article/delete/'+id).map(
        (response:Response)=>{
          return response.json();
        }
    );
  }

      getAchats(id:any){
      return this.http.get('/api/market/achats/'+id).map(
        (response:Response)=>{
          return response.json();
        }
      );
  }
  

}
