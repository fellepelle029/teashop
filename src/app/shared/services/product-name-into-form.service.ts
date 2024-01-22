import { Injectable } from '@angular/core';
import {OrderDataType} from "../../types/order-data.type";
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductNameIntoFormService {

  selectedProduct: string = '';
  private selectedProductKey = 'selectedProduct';


  constructor(private http: HttpClient) {
    const storedProduct = localStorage.getItem(this.selectedProductKey);
    this.selectedProduct = storedProduct || '';
  }

  setSelectedProduct(product: string) {
    this.selectedProduct = product;
    localStorage.setItem(this.selectedProductKey, product);
  }

  getSelectedProduct(): string {
    return this.selectedProduct;
  }

  postOrder(orderData: OrderDataType): Observable<OrderDataType> {
    return this.http.post<OrderDataType>('https://testologia.site/order-tea', orderData)
      .pipe(
        catchError((error) => {
          console.error(error);
          return throwError(error);
        })
      );
  }
}
