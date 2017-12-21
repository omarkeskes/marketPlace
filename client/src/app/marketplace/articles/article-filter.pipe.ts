import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articleFilter'
})
export class ArticleFilterPipe implements PipeTransform {

    transform(value: any[], filterBy: string ): any {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy ? value.filter((article: any) =>
            article.titre.toLocaleLowerCase().indexOf(filterBy) !== -1 || 
            article.categorie.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
            article.provenance.toLocaleLowerCase().indexOf(filterBy) !== -1 || 
            article.description.toLocaleLowerCase().indexOf(filterBy) !== -1 || 
            article.etat.toLocaleLowerCase().indexOf(filterBy) !== -1 ) : value;
            
    }

}
