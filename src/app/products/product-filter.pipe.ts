import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'productfilter'
})

export class productfilterPipe implements PipeTransform{
    transform(products: any, searchTerm:any): any{
        if(searchTerm === undefined){
            return products;
        }
           return products.filter(function(product){
               return product.title.toLowerCase().includes(searchTerm.toLowerCase());
        
        })
        
    }
    
}