import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "categoryfilter"
})
export class categoryfilterPipe implements PipeTransform {
  transform(products: any, select?: any): any {
    if (select !== "All") {
      return select
        ? products.filter(product => product["description"] === select)
        : products;
    } else {
      return products;
    }
  }
}