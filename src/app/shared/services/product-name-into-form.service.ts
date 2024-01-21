import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductNameIntoFormService {

  selectedProduct: string = '';

  setSelectedProduct(product: string) {
    this.selectedProduct = product;
  }

  getSelectedProduct(): string {
    return this.selectedProduct;
  }
}
