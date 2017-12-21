import {Http, Response,Headers} from '@angular/http';
import 'rxjs/Rx';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ArticlesService {

  constructor(private http:Http) { }

  getArtilces(){
      return this.http.get('/api/market/articles').map(
        (response:Response)=>{
          return response.json();
        }
      );
  }

    getArtilcesByCategories(categorie:any){
      return this.http.get('/api/market/articles/'+categorie).map(
        (response:Response)=>{
          return response.json();
        }
      );
  }

    getOneArtilce(id:any){
      return this.http.get('/api/market/article/'+id).map(
        (response:Response)=>{
          return response.json();
        }
      );
  }

  getCommentaires(id:any){
    return this.http.get('/api/market/commentaires/'+id).map(
              (response:Response)=>{
          return response.json();
        }
    );
  }

  addCommentaire(comm:any){
    var headers=new Headers();
    headers.append('Content-type','Application/json');
    return this.http.post('/api/market/commentaire/add',JSON.stringify(comm),{headers:headers}).map(
      (response:Response)=>{return response.json();}
    );
  }

  acheterArticle(data:any){
        var headers=new Headers();
    headers.append('Content-type','Application/json');
    return this.http.post('/api/market/achat/add',JSON.stringify(data),{headers:headers}).map(
      (response:Response)=>{return response.json();}
    );
  }

}
